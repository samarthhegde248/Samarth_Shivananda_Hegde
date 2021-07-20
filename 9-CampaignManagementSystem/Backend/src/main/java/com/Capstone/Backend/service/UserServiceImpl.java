package com.Capstone.Backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone.Backend.Bean.UserRegistrationBean;
import com.Capstone.Backend.dao.UserRepository;
import com.Capstone.Backend.entity.UserData;


@Service
public class UserServiceImpl {
	@Autowired
	private UserRepository userRepository;
	
	public UserData save(UserRegistrationBean theNewUser) {
		//System.out.println("Checking USer ==>");
		UserData check = userRepository.findByEmail(theNewUser.getEmail());
		System.out.println("Checking USer ==> "+check);
		if(check == null) {
			UserData user = new UserData(theNewUser.getFirstname(), theNewUser.getLastname(), theNewUser.getEmail(), theNewUser.getPassword(), theNewUser.getRole());
			return userRepository.save(user);
		}
		System.out.println("User already exists");
		return null;
	}
	
	public UserData getUserByEmail(String email) {
		// TODO Auto-generated method stub
		try {
		Optional<UserData> user = userRepository.findById(email);
		if(user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
		}catch(Exception e){
			return null;
		}
	}
	
}
