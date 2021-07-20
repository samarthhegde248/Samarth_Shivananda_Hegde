package com.Capstone.Backend.Bean;

public class FormListBean {
	private int form_id;
	private String form_title;
	
	public FormListBean(){}

	public FormListBean(int l, String form_title) {
		this.form_id = l;
		this.form_title = form_title;
	}

	public int getForm_id() {
		return form_id;
	}

	public void setForm_id(int form_id) {
		this.form_id = form_id;
	}

	public String getForm_title() {
		return form_title;
	}

	public void setForm_title(String form_title) {
		this.form_title = form_title;
	}

	@Override
	public String toString() {
		return "FormListBean [form_id=" + form_id + ", form_title=" + form_title + "]";
	}
	
}
