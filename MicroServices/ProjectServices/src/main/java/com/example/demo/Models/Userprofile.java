package com.example.demo.Models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "userprofile")
public class Userprofile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "login_id", nullable = false)
    private Logininfo login;

    @Column(name = "profile_image", length = 100)
    private String profileImage;

    @Column(name = "company_name", length = 30)
    private String companyName;

    @Column(name = "hourly_rate", precision = 5, scale = 2)
    private BigDecimal hourlyRate;

    @Column(name = "tag_line", length = 50)
    private String tagLine;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @Column(name = "mobile_no", precision = 10)
    private BigDecimal mobileNo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Logininfo getLogin() {
        return login;
    }

    public void setLogin(Logininfo login) {
        this.login = login;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public BigDecimal getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(BigDecimal hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    public String getTagLine() {
        return tagLine;
    }

    public void setTagLine(String tagLine) {
        this.tagLine = tagLine;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public BigDecimal getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(BigDecimal mobileNo) {
        this.mobileNo = mobileNo;
    }

}