package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.time.Instant;

@Entity
@Table(name = "bids")
@Data
@JsonIdentityInfo(scope = Bid.class, generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer"})

public class Bid{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bid_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false,referencedColumnName = "project_id")
//    @JsonManagedReference(value = "projRef")
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false,referencedColumnName = "user_id")
//    @JsonManagedReference(value = "userRef")
    private Userprofile user;

    @Column(name = "amount", nullable = false, precision = 8, scale = 2)
    private BigDecimal amount;

    @Column(name = "bid_date", nullable = false)
    private Date bidDate;

    @Column(name = "delivery_time", nullable = false)
    private Integer deliveryTime;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "status_id", nullable = false,referencedColumnName = "status_id")
//    @JsonManagedReference(value = "statusRef")
    private Statusdetail status;

//    public Statusdetail getStatus() {
//        return status;
//    }
//
//    public void setStatus(Statusdetail status) {
//        this.status = status;
//    }
//
//    public Integer getDeliveryTime() {
//        return deliveryTime;
//    }
//
//    public void setDeliveryTime(Integer deliveryTime) {
//        this.deliveryTime = deliveryTime;
//    }
//
//    public Instant getBidDate() {
//        return bidDate;
//    }
//
//    public void setBidDate(Instant bidDate) {
//        this.bidDate = bidDate;
//    }
//
//    public BigDecimal getAmount() {
//        return amount;
//    }
//
//    public void setAmount(BigDecimal amount) {
//        this.amount = amount;
//    }
//
//    public Userprofile getUser() {
//        return user;
//    }
//
//    public void setUser(Userprofile user) {
//        this.user = user;
//    }
//
//    public Project getProject() {
//        return project;
//    }
//
//    public void setProject(Project project) {
//        this.project = project;
//    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
}