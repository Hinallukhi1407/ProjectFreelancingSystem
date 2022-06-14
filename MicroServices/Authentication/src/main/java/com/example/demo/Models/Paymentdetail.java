package com.example.demo.Models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "paymentdetails")
@Getter
@Setter
public class Paymentdetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id", nullable = false)
    private Integer id;

    @Column(name = "txn_date", nullable = false)
    private Date txnDate;

    @Column(name = "txn_no", nullable = false, length = 20)
    private String txnNo;

    @Column(name = "amount", nullable = false, precision = 8, scale = 2)
    private BigDecimal amount;

    @OneToMany(mappedBy = "payment")
    private Set<Subscribersdetail> subscribersdetails = new LinkedHashSet<>();
}