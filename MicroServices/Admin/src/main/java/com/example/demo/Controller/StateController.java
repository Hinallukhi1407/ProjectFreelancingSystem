package com.example.demo.Controller;

import com.example.demo.Models.Statedetail;
import com.example.demo.Services.StateServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/state")
public class StateController {

    @Autowired
    public StateServices services;

    @PostMapping
    public Statedetail insert(@RequestBody Statedetail statedetail)
    {
        return services.insertState(statedetail);
    }
}
