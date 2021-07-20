provider "aws" {
  version = "~> 2.0"
  region = "us-east-2"
}

locals {
  # If ypu change the bucket name here then you must update the name in the resource section of buc_policy file also
  BUCKET_NAME_S3 = "wildrydes-handson-proj"
  COGNITO_USER_POOL_NAME = "wildrydes-userpool"
  COGNITO_USER_POOL_CLIENT = "WildRydesWebApp"
  DYNAMODB_TABLE_NAME = "Rides"
  IAM_ROLE_NAME = "WildRydesLambda"
  IAM_ROLE_POLICY_NAME = "DynamoDBWriteAccess"
  LAMBDA_FILE = "index.zip"
  LAMBDA_FUNCTION_NAME = "RequestUnicorn"
  REST_API_GATEWAY = "WildRydes"
  API_GATEWAY_AUTHORIZER = "WildRydes"
  API_RESOURCE_PATH = "ride"
  HTTPREQUEST_METHOD = "POST"
  DEPLOYMENT_STAGE = "prod"
  CLOUD_WATCH_GROUP_NAME = "/aws/lambda/RequestUnicorn"
  POOLARN = "arn:aws:cognito-idp:us-east-2:{account_id}:userpool/${aws_cognito_user_pool.pool.id}"
  # Please upadte your account_id in the place of {account_id}
  # Also please update your account id in the resource section of policy file
}

resource "aws_s3_bucket" "tf-bucket" {
  bucket = local. BUCKET_NAME_S3
  acl    = "public-read"
  force_destroy = true

  policy = "${file("buc_policy.json")}"

  website {
    index_document = "index.html"
  }
}

resource "aws_cognito_user_pool" "pool" {
  name = local.COGNITO_USER_POOL_NAME
  auto_verified_attributes = ["email"]
  email_verification_message = "Hi welcome to our application, Your code is {####}"
  schema {
   name                     = "email"
   attribute_data_type      = "String"
   mutable                  = false  // false for "sub"
   required                 = true // true for "sub"
 }
  username_configuration{
    case_sensitive = false
  }

  password_policy {
    minimum_length = 8
    require_lowercase = true
    require_numbers = true
    require_uppercase = true
    require_symbols = true
  }

}

resource "aws_cognito_user_pool_client" "client" {
  name = local.COGNITO_USER_POOL_CLIENT

  user_pool_id = "${aws_cognito_user_pool.pool.id}"

  generate_secret     = false
  depends_on = ["aws_cognito_user_pool_client.client"]
}

resource "aws_dynamodb_table" "tf-dynamodb-table" {
  name           = local.DYNAMODB_TABLE_NAME
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "RideId"

  attribute {
    name = "RideId"
    type = "S"
  }
}

resource "aws_iam_role" "tf_role" {
  name = local.IAM_ROLE_NAME
  assume_role_policy = "${file("assume-role.json")}"
}

resource "aws_iam_policy" "tf-policy" {
  name = local.IAM_ROLE_POLICY_NAME

  policy = "${file("policy.json")}"
}
resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = "${aws_iam_role.tf_role.name}"
  policy_arn = "${aws_iam_policy.tf-policy.arn}"
}
data "archive_file" "init" {
  type        = "zip"
  source_file = "index.js"
  output_path = local.LAMBDA_FILE
}

resource "aws_lambda_function" "tf_lambda" {
  filename      = local.LAMBDA_FILE
  function_name = local.LAMBDA_FUNCTION_NAME
  role          = "${aws_iam_role.tf_role.arn}"
  handler       = "index.handler"

  source_code_hash = "${filebase64sha256(local.LAMBDA_FILE)}"

  runtime = "nodejs12.x"

  depends_on = ["aws_iam_role_policy_attachment.lambda_logs", "aws_cloudwatch_log_group.tf-cloudwatch-group"]
}

resource "aws_api_gateway_rest_api" "tf-rest-api" {
  name = local.REST_API_GATEWAY
  # description = "This is my API for demonstration purposes"
  endpoint_configuration {
    types = ["EDGE"]
  }
}

resource "aws_api_gateway_authorizer" "tf-api-authorizer" {
  name                   = local.API_GATEWAY_AUTHORIZER
  type = "COGNITO_USER_POOLS"
  rest_api_id            = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  authorizer_uri         = "${aws_lambda_function.tf_lambda.invoke_arn}"
  authorizer_credentials = "${aws_iam_role.tf_role.arn}"
  provider_arns = [local.POOLARN]
  depends_on = [aws_cognito_user_pool.pool.arn]
}
resource "aws_api_gateway_resource" "tf-api-resource" {
  rest_api_id = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  parent_id   = "${aws_api_gateway_rest_api.tf-rest-api.root_resource_id}"
  path_part   = local.API_RESOURCE_PATH
}
resource "aws_api_gateway_method" "tf-api-method-cors" {
  rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
  http_method   = "OPTIONS"
  authorization = "NONE"
}


resource "aws_api_gateway_method_response" "options_200" {
    rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
    resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
    http_method   = "${aws_api_gateway_method.tf-api-method-cors.http_method}"
    status_code   = 200
    response_models = { "application/json" = "Empty" }
    response_parameters = {
        "method.response.header.Access-Control-Allow-Headers" = true,
        "method.response.header.Access-Control-Allow-Methods" = true,
        "method.response.header.Access-Control-Allow-Origin" = true
    }
    depends_on = ["aws_api_gateway_method.tf-api-method-cors"]
}
resource "aws_api_gateway_integration" "options_integration" {
    rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
    resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
    http_method   = "${aws_api_gateway_method.tf-api-method-cors.http_method}"
    type          = "MOCK"
    depends_on = ["aws_api_gateway_method.tf-api-method-cors"]
}
resource "aws_api_gateway_integration_response" "options_integration_response" {
    rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
    resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
    http_method   = "${aws_api_gateway_method.tf-api-method-cors.http_method}"
    status_code   = "${aws_api_gateway_method_response.options_200.status_code}"
    response_parameters = {
        "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
        "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS,POST,PUT'",
        "method.response.header.Access-Control-Allow-Origin" = "'*'"
    }
    depends_on = ["aws_api_gateway_method_response.options_200"]
}

resource "aws_api_gateway_method" "tf-api-method" {
  rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
  http_method   = local.HTTPREQUEST_METHOD
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = "${aws_api_gateway_authorizer.tf-api-authorizer.id}"
}
resource "aws_api_gateway_integration" "tf-api-integration" {
  rest_api_id          = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  resource_id          = "${aws_api_gateway_resource.tf-api-resource.id}"
  http_method          = "${aws_api_gateway_method.tf-api-method.http_method}"
  integration_http_method = local.HTTPREQUEST_METHOD
  type                    = "AWS_PROXY"
  uri                     = "${aws_lambda_function.tf_lambda.invoke_arn}"
}
resource "aws_api_gateway_method_response" "tf-options_200" {
    rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
    resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
    http_method   = "${aws_api_gateway_method.tf-api-method.http_method}"
    status_code   = 200
    response_models = { "application/json" = "Empty" }

    depends_on = ["aws_api_gateway_method.tf-api-method"]
}

resource "aws_lambda_permission" "tf-lambda-permisiion" {
  statement_id = "AllowWildRydesAPIInvoke"
  action = "lambda:InvokeFunction"
  function_name = local.LAMBDA_FUNCTION_NAME
  principal = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.tf-rest-api.execution_arn}/*/*/*"
}

resource "aws_api_gateway_deployment" "tf-deploy" {
  rest_api_id = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  stage_name  = local.DEPLOYMENT_STAGE

  depends_on = ["aws_api_gateway_method.tf-api-method"]
}


resource "aws_cloudwatch_log_group" "tf-cloudwatch-group" {
  name              = local.CLOUD_WATCH_GROUP_NAME
  retention_in_days = 14
}
