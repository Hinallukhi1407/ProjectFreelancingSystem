package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "logininfo")
@JsonIdentityInfo(scope = Logininfo.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Logininfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "login_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "user_type_id", nullable = false)
    private Usertype userType;

    @Column(name = "email", nullable = false, length = 30)
    private String email;

    @Column(name = "password", nullable = false, length = 40)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Column(name = "registration_date", nullable = false)
    private Date registrationDate;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "status_id", nullable = false)
    private Statusdetail status;

    @Column(name = "verification_code", length = 64)
    private String verificationCode;

    @OneToMany(mappedBy = "login")
    private Set<Userprofile> userprofiles = new LinkedHashSet<>();

    @Column(name = "last_login", nullable = false)
    private Date loginDate;

    public Set<Userprofile> getUserprofiles() {
        return userprofiles;
    }

    public void setUserprofiles(Set<Userprofile> userprofiles) {
        this.userprofiles = userprofiles;
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public Statusdetail getStatus() {
        return status;
    }

    public void setStatus(Statusdetail status) {
        this.status = status;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Usertype getUserType() {
        return userType;
    }

    public void setUserType(Usertype userType) {
        this.userType = userType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}