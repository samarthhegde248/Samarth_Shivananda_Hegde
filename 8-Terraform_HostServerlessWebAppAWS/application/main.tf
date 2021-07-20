provider "aws" {
  version = "~> 2.0"
  region = "us-east-2"
}

locals {
  BUCKET_NAME_S3 =
  COGNITO_USER_POOL_NAME =
  COGNITO_USER_POOL_CLIENT =
  DYNAMODB_TABLE_NAME =
  IAM_ROLE_NAME =
  IAM_ROLE_POLICY_NAME =
  LAMBDA_FILE =
  LAMBDA_FUNCTION_NAME =
  REST_API_GATEWAY =
  API_GATEWAY_AUTHORIZER =
  API_RESOURCE_PATH =
  DEPLOYMET_STAGE =
}

resource "aws_s3_bucket" "tf-bucket" {
  bucket = "tf-handson-proj"
  acl    = "public-read"
  force_destroy = true

  policy = "${file("buc_policy.json")}"

  website {
    index_document = "index.html"
  }
}

resource "aws_cognito_user_pool" "pool" {
  name = "tf-handson-userpool"
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
  name = "tf-appclient"

  user_pool_id = "${aws_cognito_user_pool.pool.id}"

  generate_secret     = false
}

resource "aws_dynamodb_table" "tf-dynamodb-table" {
  name           = "Rides"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "RideId"

  attribute {
    name = "RideId"
    type = "S"
  }
}

resource "aws_iam_role" "tf_role" {
  name = "tf_lambda_role"
  assume_role_policy = "${file("assume-role.json")}"
}

resource "aws_iam_role_policy" "tf-policy" {
  name = "tf_lambda_policy"
  role = "${aws_iam_role.tf_role.id}"
  policy = "${file("policy.json")}"
}

data "archive_file" "init" {
  type        = "zip"
  source_file = "index.js"
  output_path = "index.zip"
}

resource "aws_lambda_function" "tf_lambda" {
  filename      = "index.zip"
  function_name = "RequestUnicorn"
  role          = "${aws_iam_role.tf_role.arn}"
  handler       = "index.handler"

  source_code_hash = "${filebase64sha256("index.zip")}"

  runtime = "nodejs12.x"
}

resource "aws_api_gateway_rest_api" "tf-rest-api" {
  name = "tf_api"
  # description = "This is my API for demonstration purposes"
  endpoint_configuration {
    types = ["EDGE"]
  }
}

resource "aws_api_gateway_authorizer" "tf-api-authorizer" {
  name                   = "tf-auth"
  type = "COGNITO_USER_POOLS"
  rest_api_id            = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  authorizer_uri         = "${aws_lambda_function.tf_lambda.invoke_arn}"
  authorizer_credentials = "${aws_iam_role.tf_role.arn}"
  provider_arns = ["arn:aws:cognito-idp:us-east-2:994499359644:userpool/${aws_cognito_user_pool.pool.id}"]
}

resource "aws_api_gateway_resource" "tf-api-resource" {
  rest_api_id = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  parent_id   = "${aws_api_gateway_rest_api.tf-rest-api.root_resource_id}"
  path_part   = "ride"
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
    status_code   = "200"
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
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = "${aws_api_gateway_authorizer.tf-api-authorizer.id}"
}
resource "aws_api_gateway_integration" "tf-api-integration" {
  rest_api_id          = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  resource_id          = "${aws_api_gateway_resource.tf-api-resource.id}"
  http_method          = "${aws_api_gateway_method.tf-api-method.http_method}"
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "${aws_lambda_function.tf_lambda.invoke_arn}"
}
resource "aws_api_gateway_method_response" "tf-options_200" {
    rest_api_id   = "${aws_api_gateway_rest_api.tf-rest-api.id}"
    resource_id   = "${aws_api_gateway_resource.tf-api-resource.id}"
    http_method   = "${aws_api_gateway_method.tf-api-method.http_method}"
    status_code   = "200"
    response_models = { "application/json" = "Empty" }

    depends_on = ["aws_api_gateway_method.tf-api-method"]
}
resource "aws_api_gateway_deployment" "tf-deploy" {
  rest_api_id = "${aws_api_gateway_rest_api.tf-rest-api.id}"
  stage_name  = "prod"
}
