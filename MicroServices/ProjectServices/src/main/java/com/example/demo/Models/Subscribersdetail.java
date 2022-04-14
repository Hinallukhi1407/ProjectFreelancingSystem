package com.example.demo.Models;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "subscribersdetails")
public class Subscribersdetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sub_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private Userprofile user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "plan_id", nullable = false)
    private Membership plan;

    @Column(name = "start_date", nullable = false)
    private Instant startDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "payment_id", nullable = false)
    private Paymentdetail payment;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "status_id", nullable = false)
    private Statusdetail status;



    public Statusdetail getStatus() {
        return status;
    }

    public void setStatus(Statusdetail status) {
        this.status = status;
    }

    public Paymentdetail getPayment() {
        return payment;
    }

    public void setPayment(Paymentdetail payment) {
        this.payment = payment;
    }

    public Instant getStartDate() {
        return startDate;
    }

    public void setStartDate(Instant startDate) {
        this.startDate = startDate;
    }

    public Membership getPlan() {
        return plan;
    }

    public void setPlan(Membership plan) {
        this.plan = plan;
    }

    public Userprofile getUser() {
        return user;
    }

    public void setUser(Userprofile user) {
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}