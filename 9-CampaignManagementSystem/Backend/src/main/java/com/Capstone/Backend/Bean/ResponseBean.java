package com.Capstone.Backend.Bean;

public class ResponseBean {
	private String response;
	
	public ResponseBean() {}
	public ResponseBean(String response) {
		this.response = response;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	@Override
	public String toString() {
		return "ResponseBean [response=" + response + "]";
	}
	
}
