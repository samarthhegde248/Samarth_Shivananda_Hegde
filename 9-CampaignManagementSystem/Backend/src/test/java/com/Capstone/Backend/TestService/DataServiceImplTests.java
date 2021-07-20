package com.Capstone.Backend.TestService;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyObject;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.Capstone.Backend.Bean.QuestionAnswerBean;
import com.Capstone.Backend.Bean.UserResponseBean;
import com.Capstone.Backend.dao.DataRepository;
import com.Capstone.Backend.entity.UserResponseData;
import com.Capstone.Backend.service.DataServiceImpl;

@WebMvcTest(DataServiceImpl.class)
class DataServiceImplTests {
	
//	@Autowired
//	private MockMvc mockMvc;
	
	@MockBean
	private DataRepository dataRepository;
	
	@Autowired
	private DataServiceImpl dataService;
	
	@Test
	void testGetAll() throws Exception {
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Date submitDate = format.parse("2020-08-02 05:21:37");
		UserResponseData usrdata = new UserResponseData(3, "santosh@gmail.com", "Sample", submitDate, "What is your surname name?","Santosh", "","", "","", "","", "","", "","");
		ArrayList<UserResponseData> retResult = new ArrayList<UserResponseData>();
		retResult.add(usrdata);
		
		when(this.dataRepository.findAll()).thenReturn(retResult);
		
		ArrayList<UserResponseData> expected = this.dataService.getAll();
		Assertions.assertEquals(1, expected.size());
	}
	
	@Test
	void testSave() throws Exception {
		ArrayList<QuestionAnswerBean> quesList = new ArrayList<QuestionAnswerBean>();
		quesList.add(new QuestionAnswerBean("What is your surname name?","Santosh"));
		quesList.add(new QuestionAnswerBean());
		quesList.add(new QuestionAnswerBean());
		quesList.add(new QuestionAnswerBean());
		quesList.add(new QuestionAnswerBean());
		quesList.add(new QuestionAnswerBean());
		UserResponseBean theBean = new UserResponseBean("santosh@gmail.com","2020-08-02 05:21:37","Sample",quesList);
		
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Date submitDate = format.parse("2020-08-02 05:21:37");
		UserResponseData usrdata = new UserResponseData(3, "santosh@gmail.com", "Sample", submitDate, "What is your surname name?","Santosh", "","", "","", "","", "","", "","");
		
		when(this.dataRepository.save(anyObject())).thenReturn(usrdata);
		
		UserResponseData expected = this.dataService.save(theBean);
		Assertions.assertEquals(3, expected.getId());
	}
		
	@Test
	void testFilterBytitleEmail() throws Exception {
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Date submitDate = format.parse("2020-08-02 05:21:37");
		UserResponseData usrdata = new UserResponseData(3, "santosh@gmail.com", "Sample", submitDate, "What is your surname name?","Santosh", "","", "","", "","", "","", "","");
		Object[] fake = {usrdata};
		List<Object[]> retResult =(List) Arrays.asList(fake);
		when(this.dataRepository.filterByEmailTitle(anyString(), anyString()))
		.thenReturn(retResult);
		Assertions.assertEquals(false, this.dataService.filterBytitleEmail("santosh@gmail.com", "Sample"));
	}
	
}
