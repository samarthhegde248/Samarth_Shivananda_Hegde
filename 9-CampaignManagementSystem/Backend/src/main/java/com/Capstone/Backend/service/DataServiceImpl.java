package com.Capstone.Backend.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.Backend.Bean.UserResponseBean;
import com.Capstone.Backend.dao.DataRepository;
import com.Capstone.Backend.dao.FormRepository;
import com.Capstone.Backend.entity.UserResponseData;

@Service
public class DataServiceImpl {
	
	@Autowired
	private DataRepository dataRepository;
	
	public UserResponseData save(UserResponseBean theBean) {
		Date submitDate;
		try {
			submitDate = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(theBean.getSubmitdate());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			System.out.println("I AM IN CATCH BLOCK OF SAVE OF DATASERVICEIMPL OF SERVICE PACKAGE");
			submitDate = new Date();
		}
		UserResponseData data = new UserResponseData(theBean.getUser(),
				theBean.getForm_title(),
				submitDate,
				theBean.getData().get(0).getQuestion(),
				theBean.getData().get(0).getAnswer(),
				theBean.getData().get(1).getQuestion(),
				theBean.getData().get(1).getAnswer(),
				theBean.getData().get(2).getQuestion(),
				theBean.getData().get(2).getAnswer(),
				theBean.getData().get(3).getQuestion(),
				theBean.getData().get(3).getAnswer(),
				theBean.getData().get(4).getQuestion(),
				theBean.getData().get(4).getAnswer(),
				theBean.getData().get(5).getQuestion(),
				theBean.getData().get(5).getAnswer()
				);
		System.out.println("save() od DATASERVCIEIMPL");
		System.out.println(data);
		return this.dataRepository.save(data);
	}
	
//	public List<UserResponseData> getAll(){
//		List<UserResponseData> data = this.dataRepository.findAll();
//		return data;
//	}
	
	public Optional<UserResponseData>  getByID(int id) {
		Optional<UserResponseData> data = this.dataRepository.findById(id);
		return data;
	}
	
	
	public ArrayList<UserResponseData> getAll(){
		return (ArrayList<UserResponseData>) this.dataRepository.findAll();
	}
	
	public boolean filterBytitleEmail(String user, String title) {
		return this.dataRepository.filterByEmailTitle(user, title).isEmpty();
	}
	
}
