package com.example.demo.Models;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.LinkedHashSet;
import java.util.Set;

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

    @OneToMany(mappedBy = "plan")
    private Set<Subscribersdetail> subscribersdetails = new LinkedHashSet<>();

    public Set<Subscribersdetail> getSubscribersdetails() {
        return subscribersdetails;
    }

    public void setSubscribersdetails(Set<Subscribersdetail> subscribersdetails) {
        this.subscribersdetails = subscribersdetails;
    }

    public Integer getUserTypeId() {
        return userTypeId;
    }

    public void setUserTypeId(Integer userTypeId) {
        this.userTypeId = userTypeId;
    }

    public Integer getBidLimit() {
        return bidLimit;
    }

    public void setBidLimit(Integer bidLimit) {
        this.bidLimit = bidLimit;
    }

    public Integer getPostLimit() {
        return postLimit;
    }

    public void setPostLimit(Integer postLimit) {
        this.postLimit = postLimit;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}