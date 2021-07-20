package com.Capstone.Backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Capstone.Backend.entity.UserResponseData;

@Repository
public interface DataRepository extends JpaRepository<UserResponseData, Integer>  {

	@Query(value="SELECT * FROM user_response where email=(:user) AND survey_title=(:title)", nativeQuery = true)
	public List<Object[]> filterByEmailTitle(@Param("user") String user, @Param("title") String title);
}
