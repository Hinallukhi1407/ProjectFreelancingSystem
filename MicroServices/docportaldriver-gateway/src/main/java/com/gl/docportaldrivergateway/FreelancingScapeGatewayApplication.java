package com.gl.docportaldrivergateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableZuulProxy
public class FreelancingScapeGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(FreelancingScapeGatewayApplication.class, args);
	}

	/*@Bean
	public Prefilter prefilter(){
		return new Prefilter();
	}*/
}
