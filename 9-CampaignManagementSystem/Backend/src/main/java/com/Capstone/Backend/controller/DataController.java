package com.Capstone.Backend.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.mail.MessagingException;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;

import com.Capstone.Backend.Bean.AuthenticationResult;
import com.Capstone.Backend.Bean.DynamicFormBean;
import com.Capstone.Backend.Bean.EmailListString;
import com.Capstone.Backend.Bean.FormListBean;
import com.Capstone.Backend.Bean.LoginBean;
import com.Capstone.Backend.Bean.QuestionAnswerBean;
import com.Capstone.Backend.Bean.ResponseBean;
import com.Capstone.Backend.Bean.SurveyListBean;
import com.Capstone.Backend.Bean.UserRegistrationBean;
import com.Capstone.Backend.Bean.UserResponseBean;
import com.Capstone.Backend.dao.DataRepository;
import com.Capstone.Backend.entity.FormData;
import com.Capstone.Backend.entity.UserData;
import com.Capstone.Backend.entity.UserResponseData;
import com.Capstone.Backend.service.DataServiceImpl;
import com.Capstone.Backend.service.FormServiceImpl;
import com.Capstone.Backend.service.UserServiceImpl;

import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;


@Controller
@RequestMapping("/api")
public class DataController {
	
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@Autowired
	FormServiceImpl formServiceImpl;
	
	@Autowired
	DataServiceImpl dataServiceImpl;
	
	@Autowired
	DataRepository datarepo;
	
	@Autowired
    private JavaMailSender javaMailSender;
	
	@GetMapping("/")
	@ResponseBody
	public String showHome() {
		return "Welcome";
	}

	@PostMapping(value = "/registration", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public UserData doRegistration(@RequestBody UserRegistrationBean theNewUser) {
		System.out.println("In Registration : " + theNewUser);
		registrationEmail(theNewUser.getEmail());
		return userServiceImpl.save(theNewUser);
	}
	
//	@GetMapping(value="/login", produces = MediaType.APPLICATION_JSON_VALUE)
//	@CrossOrigin(origins = "http://localhost:4200")
//	public String getDoLogin() {
//		return "redirect:/";
//	}
	
	@PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public AuthenticationResult doLogin(@RequestBody LoginBean theLoginBean, HttpServletRequest request,
			HttpServletResponse response) {
		AuthenticationResult result = new AuthenticationResult();
		System.out.println(theLoginBean);
		UserData theUserData = userServiceImpl.getUserByEmail(theLoginBean.getUsername());
		if(theUserData != null) {
			if(theUserData.getPassword().equals(theLoginBean.getPassword())) {
				result.setAccess(theUserData.getRole());
				request.getSession().setAttribute("email", theUserData.getEmail());
				request.getSession().setAttribute("role", theUserData.getRole());
			}	else {
				result.setAccess("failed");
			}
		}else {
			result.setAccess("failed");
		}
		
		return result;
	}
	
	@GetMapping(value="/logout")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public ResponseBean doLogout(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("I am in doLogout()");
		ResponseBean result = new ResponseBean();
		try {
		request.getSession().removeAttribute("email");
		request.getSession().removeAttribute("role");
		result.setResponse("loggedout");
		return result;
		}catch(Exception e) {
		result.setResponse("something went wrong");
		return result;
		}
	}
	
	
	@PostMapping(value = "/dynamicform", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public ResponseBean saveFormFormat(@RequestBody DynamicFormBean theDynamicForm, HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("This is the form details to be saved which is coming from frontend\n");
		System.out.println(theDynamicForm);
		ResponseBean result = new ResponseBean();
		try {
			FormData tmp = this.formServiceImpl.save(theDynamicForm);
			result.setResponse(""+tmp.getID());
			return result;
		}catch(Exception e) {
			result.setResponse("failure");
			System.out.println("Dynamic form Exception" + e);
			return result;
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/getAllSurveyList", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<FormData> getAllSurveyList() {
		System.out.println("I am in getAllSurveyList \n");
		List<FormData> result = this.formServiceImpl.getAllSurveyList();
		System.out.println("Get all Survey Data Result (Controller) => "+result);
		return result;
	}
		
	@PostMapping(value="/surveyList", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public SurveyListBean getSurveyList(@RequestBody JSONObject user, HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println(user.getAsString("user"));
		ArrayList<FormListBean> result = this.formServiceImpl.getListOfForms(user.getAsString("user"));
		System.out.println(result);
		result.sort(Comparator.comparing(FormListBean::getForm_title));
		ArrayList<FormListBean> filteredResult = new ArrayList<FormListBean>();
		SurveyListBean sendingResult;
		if(this.dataServiceImpl.getAll().isEmpty()) {
			sendingResult = new SurveyListBean(result);
		}else {
		for(FormListBean item: result) {
			if(this.dataServiceImpl.filterBytitleEmail(user.getAsString("user"), item.getForm_title())) {
				filteredResult.add(item);
			}
		}
		sendingResult = new SurveyListBean(filteredResult);
		}
		return sendingResult;
	}
	
	@GetMapping(value="/surveyList/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public void publishSurvey(@PathVariable int id) {
		System.out.println("Inside Publish Survey Form =>" +id);
		try {
			this.formServiceImpl.updateSurveyById(id);
		} catch (Exception e) {
			System.out.println("Exception in Delete Survey, Inside Catch block");
		}	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(value="/delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public void deleteSurvey(@PathVariable int id) {
		System.out.println("Inside Delete Survey Form =>" +id);
		try {
			this.formServiceImpl.deleteSurveyById(id);
		} catch (Exception e) {
			System.out.println("Exception in Delete Survey, Inside Catch block");
		}	
	}
	
	@GetMapping(value="/survey/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public JSONObject getSurvey(@PathVariable int id, HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("I am in getSurvey()");
		System.out.println(id);
		System.out.println(this.formServiceImpl.getSurveyById(id).getForm_format());
		JSONParser parser = new JSONParser();
		JSONObject json;
		try {
			json = (JSONObject) parser.parse(this.formServiceImpl.getSurveyById(id).getForm_format());
		} catch (ParseException e) {
			System.out.println("I AM IN CATCH BLOCK OF getSurvey() CONTROLLER");
			json = null;
		}
		return json;		
	}
	
	@GetMapping(value="/userresponseList", produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public List<UserResponseData> UserResponseList(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("Inside User Response Survey List");
		List<UserResponseData> result = this.dataServiceImpl.getAll();
		System.out.println("User Response Data=>" +result);
		return result;
	}
	
	@GetMapping(value="/userresponseList/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public JSONObject getUserResponseSurvey(@PathVariable int id, HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("I am in getUserSurveyResponse");
		System.out.println(id);
		System.out.println(this.formServiceImpl.getSurveyById(id).getForm_format());
		JSONParser parser = new JSONParser();
		JSONObject json;
		try {
			json = (JSONObject) parser.parse(this.formServiceImpl.getSurveyById(id).getForm_format());
		} catch (ParseException e) {
			System.out.println("I AM IN CATCH BLOCK OF getSurvey() CONTROLLER");
			json = null;
		}
		return json;	
	}
	
	@PostMapping(value = "/saveResponse", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public ResponseBean saveResponse(@RequestBody UserResponseBean theResponse, HttpServletRequest request,
			HttpServletResponse response) {
		String email = theResponse.getUser();
		System.out.println("Email ="+email);
		ResponseBean result = new ResponseBean();
		System.out.println("saveResponse() of controller\n");
		System.out.println(theResponse);
		System.out.println(theResponse.getData().size());
		if(theResponse.getData().size()<6) {
			ArrayList<QuestionAnswerBean> filler = new ArrayList<QuestionAnswerBean>();
			for(int i=theResponse.getData().size(); i<6; i++) {
				QuestionAnswerBean nullBean = new QuestionAnswerBean();
				filler.add(nullBean);
			}
			 	theResponse.getData().addAll(filler);			
		}
		try {
			UserResponseData theUserResponse = this.dataServiceImpl.save(theResponse);
			System.out.println(theUserResponse);
			if(theUserResponse == null) {
				System.out.println("I AM IN IF OF saveResponse CONTROLLER");
				result.setResponse("failed");
			}else {
				System.out.println("I AM IN else OF saveResponse CONTROLLER");
				sendEmail(email);
				result.setResponse("success");
			}
		} catch (Exception e) {
			System.out.println("I AM IN CATCH OF saveResponse CONTROLLER");
			System.out.println(theResponse.getData().size());
			result.setResponse("failed");
//			e.printStackTrace();
		}
		return result;
	}
	
	@PostMapping(value="/invite/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public ResponseBean inviteUser(@PathVariable int id, @RequestBody EmailListString theList,
			HttpServletRequest request, HttpServletResponse response) {
		System.out.println("LIST OF EMAIL STRING: "+ theList.getListOfEmail());
		System.out.println("FORM ID: "+ id);
		try {
			FormData savedForm = this.formServiceImpl.getSurveyById(id);
			System.out.println("Survey by id"+"\n"+savedForm);
			List<String> emailList = Arrays.asList(theList.getListOfEmail().split(","));
			System.out.println(emailList.toString());
			if(savedForm.getListOfMails() == null || savedForm.getListOfMails().equalsIgnoreCase("")) {
				savedForm.setListOfMails(theList.getListOfEmail());
				List<String> emailIds = Arrays.asList(theList.getListOfEmail().split(","));
				for(String item: emailIds) {
					inviteEmail(item, savedForm.getForm_title(), savedForm.getID());
				}
			}else {
				List<String> removeDuplicate = Arrays.asList(savedForm.getListOfMails().split(","));
				for(String email: emailList) {
					boolean check=true;
					for(String item: removeDuplicate) {
						if(email.equals(item)) {
							check=false;
						}
					}
					if(check) {
						removeDuplicate.add(email);
						inviteEmail(email, savedForm.getForm_title(), savedForm.getID());
					}
				}
				savedForm.setListOfMails(String.join(",", removeDuplicate));
			}
			this.formServiceImpl.updateForm(savedForm);
		return new ResponseBean("success");
		} catch (Exception e) {
			return new ResponseBean("failure");
		}

	}
	
	@PostMapping(value="/editSurveyForm/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public ResponseBean editSurveyForm(@PathVariable int id, @RequestBody DynamicFormBean theBean) {
		return new ResponseBean(this.formServiceImpl.updateFormFormat(id, theBean));
	}
	
//	Mailing Service
	 void sendEmail(String email) {

	        SimpleMailMessage msg = new SimpleMailMessage();
//	        String email = (String) request.getSession().getAttribute("email");
	        msg.setTo(email);
	        System.out.println("Email Id=>" + email);
	        
	        msg.setSubject("Successful Survey Submission");
	        msg.setText("Hello "+email +", \n"
	        		+ "You have successfully Submitted the survey Form. \n\n"
	        		+"Thank you,");
	        
	        javaMailSender.send(msg);
	    }
	 
	 
	 
//	 Registration Email
	 
	 void registrationEmail(String email) {

	        SimpleMailMessage msg = new SimpleMailMessage();
//	        String email = (String) request.getSession().getAttribute("email");
	        msg.setTo(email);
	        System.out.println("Email Id=>" + email);
	        
	        msg.setSubject("Registration Successfull");
	        msg.setText("Hello "+email +", \n"
	        		+ "Your Registration is successful for Survey Management System. \n"
	        		+"Click here to take survey \n http://localhost:8080/login"
	        		+"\n\nThank you.");
	        
	        javaMailSender.send(msg);

	    }
	 
	 void inviteEmail(String email, String formTitle, int id) {

	        SimpleMailMessage msg = new SimpleMailMessage();
//	        String email = (String) request.getSession().getAttribute("email");
	        msg.setTo(email);
	        System.out.println("Email Id=>" + email);
	        
	        msg.setSubject("Iniviting you for new survey");
	        msg.setText("Hi,"+ email +"\n"
	        		+ "You are invited to give feedback to our new survey "+ formTitle+"\n\n"
	        		+"http://localhost:8080/survey/"+id
	        		+"\n\nThank you.");
	        
	        javaMailSender.send(msg);

	    }
	    

}
