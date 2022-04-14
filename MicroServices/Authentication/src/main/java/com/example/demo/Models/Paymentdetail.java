package com.example.demo.Models;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "paymentdetails")
public class Paymentdetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id", nullable = false)
    private Integer id;

    @Column(name = "txn_date", nullable = false)
    private Instant txnDate;

    @Column(name = "txn_no", nullable = false, length = 20)
    private String txnNo;

    @Column(name = "amount", nullable = false, precision = 8, scale = 2)
    private BigDecimal amount;

    @OneToMany(mappedBy = "payment")
    private Set<Subscribersdetail> subscribersdetails = new LinkedHashSet<>();

    public Set<Subscribersdetail> getSubscribersdetails() {
        return subscribersdetails;
    }

    public void setSubscribersdetails(Set<Subscribersdetail> subscribersdetails) {
        this.subscribersdetails = subscribersdetails;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getTxnNo() {
        return txnNo;
    }

    public void setTxnNo(String txnNo) {
        this.txnNo = txnNo;
    }

    public Instant getTxnDate() {
        return txnDate;
    }

    public void setTxnDate(Instant txnDate) {
        this.txnDate = txnDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}