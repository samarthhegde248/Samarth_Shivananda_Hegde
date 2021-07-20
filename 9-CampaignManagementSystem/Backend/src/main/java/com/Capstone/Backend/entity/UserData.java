package com.Capstone.Backend.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class UserData {
	
	@Id
	@NotNull
	@Column(name="email", unique=true, nullable = false)
	private String email;
	
	@NotNull
	@Column(name="firstname", nullable = false)
	private String firstname;
	
	@NotNull
	@Column(name="lastname", nullable = false)
	private String lastname;
	
	@NotNull
	@Column(name="password", nullable = false)
	private String password;
	
	@NotNull
	@Column(name="role", nullable = false)
	private String role;
	
	
	public UserData() {}


	public UserData( String firstname, String lastname, String email, String password, String role) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.role = role;
	}



	public String getFirstname() {
		return firstname;
	}



	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}



	public String getLastname() {
		return lastname;
	}



	public void setLastname(String lastname) {
		this.lastname = lastname;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "UserData [firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + ", role=" + role + "]";
	}
	
}
