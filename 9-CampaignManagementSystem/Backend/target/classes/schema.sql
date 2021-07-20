DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS form_data;
DROP TABLE IF EXISTS user_response;

CREATE TABLE user (
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  role varchar(255) NOT NULL,
  PRIMARY KEY (email));

CREATE TABLE form_data(
	ID int(11) NOT NULL AUTO_INCREMENT,
	form_title varchar(255) NOT NULL,
	created_date datetime NOT NULL,
	end_date datetime NULL,
	available boolean NOT NULL default false,
	form_format json NOT NULL,
	list_of_mails varchar(255) NULL,
	PRIMARY KEY (ID));

CREATE TABLE user_response(
	id int(11) NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	survey_title varchar(255) NOT NULL,
	submit_date datetime NOT NULL,
	question0 varchar(255) NULL default NULL,
	answer0 varchar(255) NULL default NULL,
	question1 varchar(255) NULL default NULL,
	answer1 varchar(255) NULL default NULL,
	question2 varchar(255) NULL default NULL,
	answer2 varchar(255) NULL default NULL,
	question3 varchar(255) NULL default NULL,
	answer3 varchar(255) NULL default NULL,
	question4 varchar(255) NULL default NULL,
	answer4 varchar(255) NULL default NULL,
	question5 varchar(255) NULL default NULL,
	answer5 varchar(255) NULL default NULL,
	PRIMARY KEY (id));