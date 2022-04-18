package com.example.demo.Controller;

import com.example.demo.Client.SkillRepository;
import com.example.demo.Models.Skill;
import com.example.demo.Services.SkillServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/skill")
public class SkillController {

    @Autowired
    public SkillServices skillServices;
    @Autowired
    public SkillRepository skillRepository;

    @GetMapping("/all")
    public List<Skill> getall(){return skillRepository.findAll();}

    @PostMapping("/add")
    public Skill insert(Skill s1)
    {
        return s1;
    }

}
