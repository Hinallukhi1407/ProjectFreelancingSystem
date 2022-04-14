package com.example.demo.Models;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "userprofile")
public class Userprofile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @Column(name = "mobile_no", precision = 10)
    private BigDecimal mobileNo;

    @OneToMany(mappedBy = "user")
    private Set<Project> projects = new LinkedHashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Subscribersdetail> subscribersdetails = new LinkedHashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Bid> bids = new LinkedHashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Freelancerskill> freelancerskills = new LinkedHashSet<>();

    public Set<Freelancerskill> getFreelancerskills() {
        return freelancerskills;
    }

    public void setFreelancerskills(Set<Freelancerskill> freelancerskills) {
        this.freelancerskills = freelancerskills;
    }

    public Set<Bid> getBids() {
        return bids;
    }

    public void setBids(Set<Bid> bids) {
        this.bids = bids;
    }

    public Set<Subscribersdetail> getSubscribersdetails() {
        return subscribersdetails;
    }

    public void setSubscribersdetails(Set<Subscribersdetail> subscribersdetails) {
        this.subscribersdetails = subscribersdetails;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    public BigDecimal getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(BigDecimal mobileNo) {
        this.mobileNo = mobileNo;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getTagLine() {
        return tagLine;
    }

    public void setTagLine(String tagLine) {
        this.tagLine = tagLine;
    }

    public BigDecimal getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(BigDecimal hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public Logininfo getLogin() {
        return login;
    }

    public void setLogin(Logininfo login) {
        this.login = login;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}