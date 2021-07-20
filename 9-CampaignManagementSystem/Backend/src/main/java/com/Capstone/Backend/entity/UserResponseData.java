package com.Capstone.Backend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Entity
//@Table(name = "user_response", uniqueConstraints = @UniqueConstraint(columnNames = "id", columnName= "email"))
@Table(name = "user_response", uniqueConstraints = @UniqueConstraint(columnNames = "id"))
public class UserResponseData {
	
	@Id
	@NotNull
	@Column(name="id", unique=true, nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@NotNull
	@Column(name="email", nullable = false)
	private String usermail;
	
	@NotNull
	@Column(name="survey_title", nullable = false)
	private String form_title;
	
	@NotNull
	@Column(name="submit_date", nullable = false)
	private Date submitdate;
	
	@Column(name="question0")
	private String question0;
	@Column(name="answer0")
	private String answer0;
	
	@Column(name="question1")
	private String question1;
	@Column(name="answer1")
	private String answer1;
	
	@Column(name="question2")
	private String question2;
	@Column(name="answer2")
	private String answer2;
	
	@Column(name="question3")
	private String question3;
	@Column(name="answer3")
	private String answer3;
	
	@Column(name="question4")
	private String question4;
	@Column(name="answer4")
	private String answer4;
	
	@Column(name="question5")
	private String question5;
	@Column(name="answer5")
	private String answer5;
	
	public UserResponseData() {}

	public UserResponseData( String usermail,String form_title, Date submitdate, String question0,
			String answer0, String question1, String answer1, String question2, String answer2, String question3,
			String answer3, String question4, String answer4, String question5, String answer5) {
		this.usermail = usermail;
		this.form_title = form_title;
		this.submitdate = submitdate;
		this.question0 = question0;
		this.answer0 = answer0;
		this.question1 = question1;
		this.answer1 = answer1;
		this.question2 = question2;
		this.answer2 = answer2;
		this.question3 = question3;
		this.answer3 = answer3;
		this.question4 = question4;
		this.answer4 = answer4;
		this.question5 = question5;
		this.answer5 = answer5;
	}

	public int getId() {
		return id;
	}

	public String getUsermail() {
		return usermail;
	}

	public void setUsermail(String usermail) {
		this.usermail = usermail;
	}

	public Date getSubmitdate() {
		return submitdate;
	}

	public void setSubmitdate(Date submitdate) {
		this.submitdate = submitdate;
	}

	public String getQuestion0() {
		return question0;
	}

	public void setQuestion0(String question0) {
		this.question0 = question0;
	}

	public String getAnswer0() {
		return answer0;
	}

	public void setAnswer0(String answer0) {
		this.answer0 = answer0;
	}

	public String getQuestion1() {
		return question1;
	}

	public void setQuestion1(String question1) {
		this.question1 = question1;
	}

	public String getAnswer1() {
		return answer1;
	}

	public void setAnswer1(String answer1) {
		this.answer1 = answer1;
	}

	public String getQuestion2() {
		return question2;
	}

	public void setQuestion2(String question2) {
		this.question2 = question2;
	}

	public String getAnswer2() {
		return answer2;
	}

	public void setAnswer2(String answer2) {
		this.answer2 = answer2;
	}

	public String getQuestion3() {
		return question3;
	}

	public void setQuestion3(String question3) {
		this.question3 = question3;
	}

	public String getAnswer3() {
		return answer3;
	}

	public void setAnswer3(String answer3) {
		this.answer3 = answer3;
	}

	public String getQuestion4() {
		return question4;
	}

	public void setQuestion4(String question4) {
		this.question4 = question4;
	}

	public String getAnswer4() {
		return answer4;
	}

	public void setAnswer4(String answer4) {
		this.answer4 = answer4;
	}

	public String getQuestion5() {
		return question5;
	}

	public void setQuestion5(String question5) {
		this.question5 = question5;
	}

	public String getAnswer5() {
		return answer5;
	}

	public void setAnswer5(String answer5) {
		this.answer5 = answer5;
	}
	
	

	@Override
	public String toString() {
		return "UserResponseData [id=" + id + ", usermail=" + usermail +", form_title="+ form_title + ", submitdate=" + submitdate + ", question0="
				+ question0 + ", answer0=" + answer0 + ", question1=" + question1 + ", answer1=" + answer1
				+ ", question2=" + question2 + ", answer2=" + answer2 + ", question3=" + question3 + ", answer3="
				+ answer3 + ", question4=" + question4 + ", answer4=" + answer4 + ", question5=" + question5
				+ ", answer5=" + answer5 + "]";
	}

	public String getForm_title() {
		return form_title;
	}

	public void setForm_title(String form_title) {
		this.form_title = form_title;
	}
	
	public UserResponseData(int id, String usermail,String form_title, Date submitdate, String question0,
			String answer0, String question1, String answer1, String question2, String answer2, String question3,
			String answer3, String question4, String answer4, String question5, String answer5) {
		this.id = id;
		this.usermail = usermail;
		this.form_title = form_title;
		this.submitdate = submitdate;
		this.question0 = question0;
		this.answer0 = answer0;
		this.question1 = question1;
		this.answer1 = answer1;
		this.question2 = question2;
		this.answer2 = answer2;
		this.question3 = question3;
		this.answer3 = answer3;
		this.question4 = question4;
		this.answer4 = answer4;
		this.question5 = question5;
		this.answer5 = answer5;
	}
}
