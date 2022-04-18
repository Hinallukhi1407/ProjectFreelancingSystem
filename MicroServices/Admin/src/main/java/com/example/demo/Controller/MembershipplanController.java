package com.example.demo.Controller;

import com.example.demo.Models.Membership;
import com.example.demo.Services.MemberShipPlanServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/membership")
public class MembershipplanController {

    @Autowired
    public MemberShipPlanServices memberShipPlanServices;

    @PostMapping("/add")
    public Membership insertData(@RequestBody Membership membership)
    {
        return memberShipPlanServices.insertPlan(membership);
    }

}
