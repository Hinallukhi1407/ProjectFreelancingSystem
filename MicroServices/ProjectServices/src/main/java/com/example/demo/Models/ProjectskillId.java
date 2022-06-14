package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
public class ProjectskillId implements Serializable {
    private static final long serialVersionUID = 4344414555669374616L;
    @Column(name = "skill_id", nullable = false)
    private Integer skillId;
    @Column(name = "project_id", nullable = false)
    private Integer projectId;

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