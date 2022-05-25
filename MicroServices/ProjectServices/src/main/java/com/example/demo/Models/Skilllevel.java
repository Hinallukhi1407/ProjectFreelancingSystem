package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "skilllevel")
public class Skilllevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skill_level_id", nullable = false)
    private Integer id;

    @Column(name = "skill_name", nullable = false, length = 20)
    private String skillName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

}