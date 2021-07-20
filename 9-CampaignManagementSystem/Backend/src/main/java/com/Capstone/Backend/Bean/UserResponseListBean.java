package com.Capstone.Backend.Bean;

import java.util.ArrayList;

public class UserResponseListBean {
	private ArrayList<UserResponseBean> surveyresponselist;

	public ArrayList<UserResponseBean> getSurveyresponselist() {
		return surveyresponselist;
	}

	public void setSurveyresponselist(ArrayList<UserResponseBean> surveyresponselist) {
		this.surveyresponselist = surveyresponselist;
	}

	public UserResponseListBean() {}
	
	public UserResponseListBean(ArrayList<UserResponseBean> surveyresponselist) {
		this.surveyresponselist = surveyresponselist;
	}

	@Override
	public String toString() {
		return "UserResponseListBean [surveyresponselist=" + surveyresponselist + "]";
	}
}
