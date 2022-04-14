package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "freelancerskills")
@JsonIdentityInfo(scope = Freelancerskill.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
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

    public Skilllevel getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(Skilllevel skillLevel) {
        this.skillLevel = skillLevel;
    }

    public Userprofile getUser() {
        return user;
    }

    public void setUser(Userprofile user) {
        this.user = user;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public FreelancerskillId getId() {
        return id;
    }

    public void setId(FreelancerskillId id) {
        this.id = id;
    }
}