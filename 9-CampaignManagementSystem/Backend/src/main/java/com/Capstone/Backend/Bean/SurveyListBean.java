package com.Capstone.Backend.Bean;

import java.util.ArrayList;
import java.util.List;

public class SurveyListBean {
	private ArrayList<FormListBean> surveylist;
	
	public SurveyListBean() {}

	public SurveyListBean(ArrayList<FormListBean> surveylist) {
		this.surveylist = surveylist;
	}

	public ArrayList<FormListBean> getSurveylist() {
		return surveylist;
	}

	public void setSurveylist(ArrayList<FormListBean> surveylist) {
		this.surveylist = surveylist;
	}

	@Override
	public String toString() {
		return "SurveyListBean [surveylist=" + surveylist + "]";
	}
	
}
