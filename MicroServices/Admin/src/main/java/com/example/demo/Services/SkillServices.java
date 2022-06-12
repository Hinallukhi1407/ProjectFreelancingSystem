package com.example.demo.Services;

import com.example.demo.Repository.SkillRepository;
import com.example.demo.Models.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillServices {

    @Autowired
    public SkillRepository skillRepository;

    public Skill InsertSkill(Skill s1){
        return skillRepository.save(s1);
    }

    public List<Skill> all() {return  skillRepository.findAll();}
}
