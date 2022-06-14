package com.example.demo.Controller;

import com.example.demo.Repository.SkillRepository;
import com.example.demo.Models.Skill;
import com.example.demo.Services.SkillServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/skill")
public class SkillController {

    @Autowired
    public SkillServices skillServices;

    @GetMapping("/getall")
    public List<Skill> all(){return  skillServices.all();}

    @PostMapping("/add")
    public Skill insert(@RequestBody Skill s1)
    {
        return skillServices.InsertSkill(s1);
    }

}
