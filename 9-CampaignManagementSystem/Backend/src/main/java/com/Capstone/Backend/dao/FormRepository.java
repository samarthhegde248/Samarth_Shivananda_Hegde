package com.Capstone.Backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.Capstone.Backend.entity.FormData;

public interface FormRepository extends JpaRepository<FormData, Integer> {

}
