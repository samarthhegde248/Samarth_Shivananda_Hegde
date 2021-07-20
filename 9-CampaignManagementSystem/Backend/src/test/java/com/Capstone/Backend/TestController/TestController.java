package com.Capstone.Backend.TestController;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.Capstone.Backend.controller.DataController;
import com.Capstone.Backend.dao.DataRepository;
import com.Capstone.Backend.dao.FormRepository;
import com.Capstone.Backend.entity.FormData;
import com.Capstone.Backend.entity.UserData;
import com.Capstone.Backend.service.DataServiceImpl;
import com.Capstone.Backend.service.FormServiceImpl;
import com.Capstone.Backend.service.UserServiceImpl;

@WebMvcTest(DataController.class)
class TestController {
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private UserServiceImpl userServiceImpl;
	
	@MockBean
	private FormServiceImpl formServiceImpl;
	
	@MockBean
	private DataServiceImpl dataServiceImpl;
	
	@MockBean
	private DataRepository datarepo;
	
	@MockBean
	private FormRepository formRepo;
	
	@MockBean
	private JavaMailSender javaMailSender;
	
	
	@Test
	void testShowHome() throws Exception {
		RequestBuilder request = MockMvcRequestBuilders.get("/api/")
				.accept(MediaType.APPLICATION_JSON_VALUE);
		MvcResult result = mockMvc.perform(request)
				.andExpect(status().isOk())
				.andExpect(content().string("Welcome"))
				.andReturn();
		}
	
	@Test
	void testGetAllSurveyList() throws Exception {
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
		Date edate = format.parse("2020-08-30T18:30:00.000+00:00");
		Date cdate = format.parse("2020-08-16T01:20:25.000+00:00");
		String formformat = "{\"IsDeleted\":true,\"Title\":\"Sample\",\"Question\":[{\"ID\":0,\"Type\":\"radio\",\"Text\":\"Question1\",\"options\":[{\"ID\":0,\"OptionText\":\"opt1\",\"OptionColor\":\"\",\"hasRemarks\":false},{\"ID\":0,\"OptionText\":\"opt2\",\"OptionColor\":\"\",\"hasRemarks\":false}],\"Required\":false,\"Remarks\":\"\",\"hasRemarks\":false}],\"ID\":0,\"expiry\":\"2020-08-30T18:30:00.000Z\"}";
		ArrayList<FormData> fakedata = new ArrayList<FormData>();
		fakedata.add(new FormData(3, "Sample", cdate, edate, true, formformat));
		
		String fakedata2 = "[{\"form_title\":\"Sample\",\"created_date\":\"2020-08-16T01:20:25.000+00:00\",\"end_date\":\"2020-08-30T18:30:00.000+00:00\",\"available\":true,\"form_format\":\"{\\\"IsDeleted\\\":true,\\\"Title\\\":\\\"Sample\\\",\\\"Question\\\":[{\\\"ID\\\":0,\\\"Type\\\":\\\"radio\\\",\\\"Text\\\":\\\"Question1\\\",\\\"options\\\":[{\\\"ID\\\":0,\\\"OptionText\\\":\\\"opt1\\\",\\\"OptionColor\\\":\\\"\\\",\\\"hasRemarks\\\":false},{\\\"ID\\\":0,\\\"OptionText\\\":\\\"opt2\\\",\\\"OptionColor\\\":\\\"\\\",\\\"hasRemarks\\\":false}],\\\"Required\\\":false,\\\"Remarks\\\":\\\"\\\",\\\"hasRemarks\\\":false}],\\\"ID\\\":0,\\\"expiry\\\":\\\"2020-08-30T18:30:00.000Z\\\"}\",\"id\":3}]";
		
		when(this.formServiceImpl.getAllSurveyList()).thenReturn(fakedata);
		
		RequestBuilder request = MockMvcRequestBuilders.get("/api/getAllSurveyList")
				.accept(MediaType.APPLICATION_JSON_VALUE);
		
		MvcResult result = mockMvc.perform(request)
				.andExpect(status().isOk())
				.andExpect(content().json(fakedata2))
				.andReturn();
	}
	
	@Test
	void testGetSurveyById() throws Exception {
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
		Date edate = format.parse("2020-08-30T18:30:00.000+00:00");
		Date cdate = format.parse("2020-08-16T01:20:25.000+00:00");
		String formformat = "{\"IsDeleted\":true,\"Title\":\"form 1\",\"Question\":[{\"Type\":\"text\",\"Required\":false,\"Remarks\":\"\",\"options\":[],\"hasRemarks\":false,\"Text\":\"test\",\"ID\":0}],\"ID\":0,\"expiry\":\"2020-08-19T18:30:00.000Z\"}";
		FormData testdata  = new FormData(4, "Test", cdate, edate, true, formformat);
	
		String testingResult = "{\"ID\": 0, \"Title\": \"form 1\", \"expiry\": \"2020-08-19T18:30:00.000Z\", \"Question\": [{\"ID\": 0, \"Text\": \"test\", \"Type\": \"text\", \"Remarks\": \"\", \"options\": [], \"Required\": false, \"hasRemarks\": false}], \"IsDeleted\": true}";
		int id = 4;
		
		when(this.formServiceImpl.getSurveyById(anyInt())).thenReturn(testdata);
		
		RequestBuilder request = MockMvcRequestBuilders.get("/api/survey/4")
				.accept(MediaType.APPLICATION_JSON_VALUE)
//				.content("{\"id\": \"4\"}")
				.contentType(MediaType.APPLICATION_JSON_VALUE);
		
		MvcResult result = mockMvc.perform(request)
				.andExpect(status().isOk())
				.andExpect(content().json(testingResult))
				.andReturn();
	}
	
	@Test
	void testDeleteSurvey() throws Exception {
		RequestBuilder request  = MockMvcRequestBuilders.delete("/api/delete/4")
				.accept(MediaType.APPLICATION_JSON_VALUE);
		
		MvcResult result = mockMvc.perform(request)
				.andExpect(status().isOk())
				.andReturn();
	}
	
	@Test
	void testDoLogin() throws Exception {
		UserData fakeusr = new UserData("Roger", "Kutcher", "roger@gmail.com", "wipro@123", "admin");
		when(this.userServiceImpl.getUserByEmail("roger@gmail.com")).thenReturn(fakeusr);
		RequestBuilder request = MockMvcRequestBuilders.post("/api/login")
				.accept(MediaType.APPLICATION_JSON_VALUE)
				.content("{\"username\" : \"roger@gmail.com\",\"password\" : \"wipro@123\"}")
				.contentType(MediaType.APPLICATION_JSON_VALUE);
		MvcResult result = mockMvc.perform(request)
				.andExpect(status().isOk())
				.andExpect(content().json("{\"access\": \"admin\"}"))
				.andReturn();
	}
	
	@Test
	void testDoRegistration() throws Exception {
		UserData fakeusr = new UserData("Santosh", "Hegde", "santosh@gmail.com", "wipro@123", "user");
		when(this.userServiceImpl.save(anyObject())).thenReturn(fakeusr);
		RequestBuilder request = MockMvcRequestBuilders.post("/api/registration")
				.accept(MediaType.APPLICATION_JSON_VALUE)
				.content("{\"firstname\": \"Santosh\",\"lastname\": \"Hegde\",\"email\": \"santosh@gmail.com\",\"password\": \"wipro@123\"}")
				.contentType(MediaType.APPLICATION_JSON_VALUE);
		MvcResult result = mockMvc.perform(request)
				.andExpect(status().isOk())
				.andExpect(content().json("{\"firstname\": \"Santosh\",\"lastname\": \"Hegde\",\"email\": \"santosh@gmail.com\",\"password\": \"wipro@123\",\"role\": \"user\"}"))
				.andReturn();
	}
	
}
