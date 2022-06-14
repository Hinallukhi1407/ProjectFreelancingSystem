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
public class FreelancerskillId implements Serializable {
    private static final long serialVersionUID = -1228335534184839827L;

    @Column(name = "skill_id", nullable = false)
    private Integer skillId;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Override
    public int hashCode() {
        return Objects.hash(skillId, userId);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        FreelancerskillId entity = (FreelancerskillId) o;
        return Objects.equals(this.skillId, entity.skillId) &&
                Objects.equals(this.userId, entity.userId);
    }
}