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

import net.minidev.json.JSONObject;

@Entity
@Table(name = "form_data", uniqueConstraints = @UniqueConstraint(columnNames = "ID"))
public class FormData {
	
	@Id
	@NotNull
	@Column(name="ID", unique=true, nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ID;
	
	@NotNull
	@Column(name="form_title", nullable = false)
	private String form_title;
	
	@NotNull
	@Column(name="created_date")
	private Date created_date;
	
	@Column(name="end_date", nullable = false)
	private Date end_date;
	
	@NotNull
	@Column(name="available", nullable = false)
	private boolean available;
	
	@NotNull
	@Column(name="form_format", nullable = false, columnDefinition = "JSON")
	private String form_format;
	
	@Column(name="list_of_mails")
	private String listOfMails;
	
	public FormData() {	}

	public FormData(String form_title, Date created_date, Date end_date,
			boolean available, String form_format) {
		this.form_title = form_title;
		this.created_date = created_date;
		this.end_date = end_date;
		this.available = available;
		this.form_format = form_format;
	}
	
	public FormData(int ID,String form_title, Date created_date, Date end_date,
			boolean available, String form_format) {
		this.ID = ID;
		this.form_title = form_title;
		this.created_date = created_date;
		this.end_date = end_date;
		this.available = available;
		this.form_format = form_format;
	}
	
	
	
	
	public FormData(int ID,String form_title, Date created_date, Date end_date,
			boolean available, String form_format, String listOfMails) {
		this.ID = ID;
		this.form_title = form_title;
		this.created_date = created_date;
		this.end_date = end_date;
		this.available = available;
		this.form_format = form_format;
		this.listOfMails = listOfMails;
	}

	public int getID() {
		return ID;
	}
	
	public void setId(int id) {
		this.ID = id;
	}
	
	public String getForm_title() {
		return form_title;
	}

	public void setForm_title(String form_title) {
		this.form_title = form_title;
	}

	public Date getCreated_date() {
		return created_date;
	}

	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}
	
	

	public boolean isAvailable() {
		return available;
	}

	public boolean setAvailable(boolean available) {
		return this.available = available;
	}

	public String getForm_format() {
		return form_format;
	}

	public void setForm_format(String form_format) {
		this.form_format = form_format;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public String getListOfMails() {
		return listOfMails;
	}

	public void setListOfMails(String listOfMails) {
		this.listOfMails = listOfMails;
	}

	@Override
	public String toString() {
		return "FormData [ID=" + ID + ", form_title=" + form_title + ", created_date=" + created_date + ", end_date="
				+ end_date + ", available=" + available + ", form_format=" + form_format + ", listOfMails="
				+ listOfMails + "]";
	}
	
}
