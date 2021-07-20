package com.Capstone.Backend.Bean;

public class AuthenticationResult {
	
	private String access;
	
	public AuthenticationResult() {
		
	}

	public AuthenticationResult(String access) {
		super();
		this.access = access;
	}

	public String getAccess() {
		return access;
	}

	public void setAccess(String access) {
		this.access = access;
	}

	@Override
	public String toString() {
		return "AuthenticationResult [access=" + access + "]";
	}

}
