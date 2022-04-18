package com.example.demo.Services;

import com.example.demo.Client.MemberShipPlanRepository;
import com.example.demo.Models.Membership;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberShipPlanServices {
    @Autowired
    public MemberShipPlanRepository memberShipPlanRepository;

    public Membership insertPlan(Membership membership)
    {
        return memberShipPlanRepository.save(membership);
    }
}
