package com.Capstone.Backend.Bean;

public class EmailListString {
	private String listOfEmail;
	
	public EmailListString(){}

	public EmailListString(String listOfEmail) {
		this.listOfEmail = listOfEmail;
	}

	public String getListOfEmail() {
		return listOfEmail;
	}

	public void setListOfEmail(String listOfEmail) {
		this.listOfEmail = listOfEmail;
	}

	@Override
	public String toString() {
		return "EmailListString [listOfEmail=" + listOfEmail + "]";
	}
	
}
