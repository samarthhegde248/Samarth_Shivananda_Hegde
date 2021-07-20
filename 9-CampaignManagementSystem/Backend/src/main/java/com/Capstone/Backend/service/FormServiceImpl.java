package com.Capstone.Backend.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.Backend.Bean.DynamicFormBean;
import com.Capstone.Backend.Bean.FormListBean;
import com.Capstone.Backend.dao.FormRepository;
import com.Capstone.Backend.entity.FormData;

import net.minidev.json.JSONObject;


@Service
public class FormServiceImpl {
	@Autowired
	private FormRepository formRepository;
	
	public FormData save(DynamicFormBean formBean) {
		Date createDate;
		Date endDate;
		try {
			createDate = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(formBean.getCreated_date());
			if(formBean.getEnd_date().equalsIgnoreCase("")) {
				endDate = null;
			}else {
			endDate = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(formBean.getEnd_date());
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			System.out.println("DATE PARSING FAILED IN FORM SERVICE IMPL");
			createDate = null;
			endDate = null;
		}
		FormData form = new FormData(formBean.getForm_title(), createDate, endDate,
				formBean.isAvailable(), JSONObject.toJSONString(formBean.getForm_format()));
		return this.formRepository.save(form);
	}
	
	
//	public ArrayList<FormListBean> getListOfForms(){
//		List<FormData> allForms = this.formRepository.findAll();
//		ArrayList<FormListBean> result = new ArrayList<FormListBean>() ;
//		if(allForms != null) {
//		for(FormData item : allForms) {
//			System.out.println(item.toString());
//				if(item.getEnd_date() == null || item.isAvailable() == true) {
//					Date now = new Date();
//					Date rightNow;
//					try {
//						String atNow = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(now);
//						rightNow = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(atNow);
//						if(item.getEnd_date().compareTo(rightNow) <= 0) {
//							System.out.println(item.getEnd_date().compareTo(rightNow));
//							item.setAvailable(false);
//							System.out.println("I AM IN CHINGING AVAILABLE OF IF");
//						}else {
//							System.out.println("I AM IN CHINGING AVAILABLE OF else");
//							FormListBean flb = new FormListBean();
//							flb.setForm_id(item.getID());
//							flb.setForm_title(item.getForm_title());
//							System.out.println(flb);
//							result.add(flb);
//						}
//					} catch (ParseException e) {
//						System.out.println("I AM IN CATCH OF getListForm() of service");
//					}
//				}
//			}
//		this.formRepository.saveAll(allForms);
//		
//		}
//		return result;
//	}
	public ArrayList<FormListBean> getListOfForms(String email){
		List<FormData> allForms = this.formRepository.findAll();
		ArrayList<FormListBean> result = new ArrayList<FormListBean>() ;
		if(allForms != null) {
		for(FormData item : allForms) {
					if(item.isAvailable() == true) {
					Date now = new Date();
					Date rightNow;
					try {
						String atNow = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(now);
						rightNow = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(atNow);
						if(item.getEnd_date() != null) {
						if(item.getEnd_date().compareTo(rightNow) <= 0) {
							System.out.println(item.getEnd_date().compareTo(rightNow));
							item.setAvailable(false);
							System.out.println("I AM IN CHINGING AVAILABLE OF IF");
						}else {
							System.out.println("I AM IN CHINGING AVAILABLE OF else");
							if(item.getListOfMails() == null) {
								System.out.println("\n\n\nFormServiceImpl\n\n\n\n");
							}else {
								List<String> savedMailList = Arrays.asList(item.getListOfMails().split(","));
								boolean check=false;
								for(String mail: savedMailList) {
									if(email.equals(mail)) {
										check=true;
									}
								}
								if(check) {
								FormListBean flb = new FormListBean();
								flb.setForm_id(item.getID());
								flb.setForm_title(item.getForm_title());
								System.out.println(flb);
								result.add(flb);
								}
							}
						}
						}else {
							System.out.println("I AM in ELSE OF endDATE != null of getListOfForms() of service");
							List<String> savedMailList = Arrays.asList(item.getListOfMails().split(","));
							boolean check=false;
							for(String mail: savedMailList) {
								if(email.equals(mail)) {
									check=true;
								}
							}
							if(check) {
							FormListBean flb = new FormListBean();
							flb.setForm_id(item.getID());
							flb.setForm_title(item.getForm_title());
							System.out.println(flb);
							result.add(flb);
							}
						}
					} catch (ParseException e) {
						System.out.println("I AM IN CATCH OF getListForm() of service");
					}
				}
			}
		this.formRepository.saveAll(allForms);
		
		}

		return result;
	}
	
	public List<FormData> getAllSurveyList() {
		List<FormData> data = this.formRepository.findAll();
		System.out.println("Get AllSurveyList details (Service Impl)=>"+data);
		return data;
	}
	
	public FormData getSurveyById(int id) {
		try {
			Optional<FormData> survey = this.formRepository.findById(id);
			if(survey.isPresent()) {
	            return survey.get();
	        } else {
	            return null;
	        }
			}catch(Exception e){
				return null;
			}
	}
	
	public void updateSurveyById(int id) {
		try {
			FormData saveData;
			Optional<FormData> data = this.formRepository.findById(id);
			boolean x = data.get().setAvailable(true);
			saveData = data.get();
//			data.
			System.out.println("From data update"+x);
			System.out.println("From data update"+data);
			System.out.println("NewData"+saveData);
			this.formRepository.save(saveData);
		}
		catch(Exception e){
//			return null;
		}
	}
	
	public String updateFormFormat(int id, DynamicFormBean revisedFormat) {
		try {
		Optional<FormData> savedForm = this.formRepository.findById(id);
		Date endDate;
		endDate = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(revisedFormat.getEnd_date());
		savedForm.get().setAvailable(revisedFormat.isAvailable());
		savedForm.get().setEnd_date(endDate);
		savedForm.get().setForm_format(JSONObject.toJSONString(revisedFormat.getForm_format()));
		savedForm.get().setListOfMails(revisedFormat.getListOfMails());
		this.formRepository.save(savedForm.get());
		return "success";
		}catch(Exception e) {
			return "failed";
		}
	}
	
	public void deleteSurveyById(int id) {
		try {
			this.formRepository.deleteById(id);
		}catch(Exception e) {
			System.out.println("Exception in Delete Survey ==>" +e);
		}
	}
	
	public FormData updateForm(FormData theForm) {
		FormData result= this.formRepository.save(theForm);
		return result;
	}
	
	
}
