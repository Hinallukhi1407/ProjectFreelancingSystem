package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "projectskills")
@JsonIdentityInfo(scope = Projectskill.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Projectskill {
    @EmbeddedId
    private ProjectskillId id;

    @MapsId("skillId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "skill_id", nullable = false)
    private Skill skill;

    @MapsId("projectId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "skill_level_id", nullable = false)
    private Skilllevel skillLevel;

    public Skilllevel getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(Skilllevel skillLevel) {
        this.skillLevel = skillLevel;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public ProjectskillId getId() {
        return id;
    }

    public void setId(ProjectskillId id) {
        this.id = id;
    }
}