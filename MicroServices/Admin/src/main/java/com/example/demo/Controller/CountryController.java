package com.example.demo.Controller;

import com.example.demo.Models.Country;
import com.example.demo.Services.CountryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/country")
public class CountryController {

    @Autowired
    public CountryServices services;

    @PostMapping
    public Country insert(@RequestBody Country country){return services.insertCountry(country);}
}
