package com.Capstone.Backend.Bean;

import java.util.ArrayList;

public class UserResponseBean {
	private String user;
	private String submitdate;
	private String form_title;
	private ArrayList<QuestionAnswerBean> data;
	
	public UserResponseBean() {	}

	public UserResponseBean(String user, String submitdate, String form_title, ArrayList<QuestionAnswerBean> data) {
		this.form_title = form_title;
		this.user = user;
		this.submitdate = submitdate;
		this.data = data;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getSubmitdate() {
		return submitdate;
	}

	public void setSubmitdate(String submitdate) {
		this.submitdate = submitdate;
	}

	public ArrayList<QuestionAnswerBean> getData() {
		return data;
	}

	public void setData(ArrayList<QuestionAnswerBean> data) {
		this.data = data;
	}
	

	@Override
	public String toString() {
		return "UserResponseBean [user=" + user + ", submitdate=" + submitdate + ", form_title=" + form_title + ", data=" + data + "]";
	}

	public String getForm_title() {
		return form_title;
	}

	public void setForm_title(String form_title) {
		this.form_title = form_title;
	}

}
