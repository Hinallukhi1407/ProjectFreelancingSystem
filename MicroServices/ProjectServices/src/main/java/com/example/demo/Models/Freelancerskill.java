package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "freelancerskills")
public class Freelancerskill {
    @EmbeddedId
    private FreelancerskillId id;

    @MapsId("skillId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "skill_id", nullable = false)
    private Skill skill;

    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private Userprofile user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "skill_level_id", nullable = false)
    private Skilllevel skillLevel;

    public FreelancerskillId getId() {
        return id;
    }

    public void setId(FreelancerskillId id) {
        this.id = id;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public Userprofile getUser() {
        return user;
    }

    public void setUser(Userprofile user) {
        this.user = user;
    }

    public Skilllevel getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(Skilllevel skillLevel) {
        this.skillLevel = skillLevel;
    }

}