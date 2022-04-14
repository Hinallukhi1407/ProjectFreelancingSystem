package com.example.demo.Models;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ProjectskillId implements Serializable {
    private static final long serialVersionUID = 4344414555669374616L;
    @Column(name = "skill_id", nullable = false)
    private Integer skillId;
    @Column(name = "project_id", nullable = false)
    private Integer projectId;

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Integer getSkillId() {
        return skillId;
    }

    public void setSkillId(Integer skillId) {
        this.skillId = skillId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(skillId, projectId);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ProjectskillId entity = (ProjectskillId) o;
        return Objects.equals(this.skillId, entity.skillId) &&
                Objects.equals(this.projectId, entity.projectId);
    }
}