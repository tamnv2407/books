package com.books.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.books.model.User;
import com.books.model.UserDTO;
import com.books.service.LoginService;

@RestController
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping(value = "/signin")
	public User login(@RequestBody UserDTO userLogin) {
		try {
			User user = loginService.login(userLogin);
			return user;
		} catch (Exception e) {
			return null;
		}
	}
}
