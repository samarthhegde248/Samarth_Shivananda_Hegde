package com.Capstone.Backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.Capstone.Backend.entity.UserData;

public interface UserRepository extends JpaRepository<UserData, String> {
	
	UserData findByEmail(String email);
	
}
