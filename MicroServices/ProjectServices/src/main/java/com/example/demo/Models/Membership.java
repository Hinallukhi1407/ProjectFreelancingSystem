package com.example.demo.Models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "membership")
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_id", nullable = false)
    private Integer id;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Column(name = "plan_name", nullable = false, length = 30)
    private String planName;

    @Column(name = "amount", nullable = false, precision = 8, scale = 2)
    private BigDecimal amount;

    @Column(name = "post_limit", nullable = false)
    private Integer postLimit;

    @Column(name = "bid_limit", nullable = false)
    private Integer bidLimit;

    @Column(name = "user_type_id", nullable = false)
    private Integer userTypeId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Integer getPostLimit() {
        return postLimit;
    }

    public void setPostLimit(Integer postLimit) {
        this.postLimit = postLimit;
    }

    public Integer getBidLimit() {
        return bidLimit;
    }

    public void setBidLimit(Integer bidLimit) {
        this.bidLimit = bidLimit;
    }

    public Integer getUserTypeId() {
        return userTypeId;
    }

    public void setUserTypeId(Integer userTypeId) {
        this.userTypeId = userTypeId;
    }

}