package com.bossapp.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
public class BackendApplication {

	// @RequestMapping("/")
	// @ResponseBody
	// public String home(){
	// 	return "Hello Docker World";
	// }

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
