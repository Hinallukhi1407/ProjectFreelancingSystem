package com.example.demo.Models;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "skilllevel")
public class Skilllevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skill_level_id", nullable = false)
    private Integer id;

    @Column(name = "skill_name", nullable = false, length = 20)
    private String skillName;

    @OneToMany(mappedBy = "skillLevel")
    private Set<Projectskill> projectskills = new LinkedHashSet<>();

    @OneToMany(mappedBy = "skillLevel")
    private Set<Freelancerskill> freelancerskills = new LinkedHashSet<>();

    public Set<Freelancerskill> getFreelancerskills() {
        return freelancerskills;
    }

    public void setFreelancerskills(Set<Freelancerskill> freelancerskills) {
        this.freelancerskills = freelancerskills;
    }

    public Set<Projectskill> getProjectskills() {
        return projectskills;
    }

    public void setProjectskills(Set<Projectskill> projectskills) {
        this.projectskills = projectskills;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}