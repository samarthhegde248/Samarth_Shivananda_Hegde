package com.Capstone.Backend.Bean;

import net.minidev.json.JSONObject;


public class DynamicFormBean {
	private String form_title;
	private String created_date;
	private String end_date;
	private boolean available;
	private JSONObject form_format;
	private String listOfMails="";
	
	public DynamicFormBean(){}

	public DynamicFormBean(String form_title, String created_date, String end_date, boolean available, JSONObject form_format) {
		this.form_title = form_title;
		this.created_date = created_date;
		this.end_date = end_date;
		this.available = available;
		this.form_format = form_format;
	}

	public String getForm_title() {
		return form_title;
	}

	public void setForm_title(String form_title) {
		this.form_title = form_title;
	}

	public String getCreated_date() {
		return created_date;
	}

	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public JSONObject getForm_format() {
		return form_format;
	}

	public void setForm_format(JSONObject form_format) {
		this.form_format = form_format;
	}

	public String getListOfMails() {
		return listOfMails;
	}

	public void setListOfMails(String listOfMails) {
		this.listOfMails = listOfMails;
	}

	@Override
	public String toString() {
		return "DynamicFormBean [form_title=" + form_title + ", created_date=" + created_date + ", end_date=" + end_date
				+ ", available=" + available + ", form_format=" + form_format + ", listOfMails=" + listOfMails + "]";
	}
	
}
