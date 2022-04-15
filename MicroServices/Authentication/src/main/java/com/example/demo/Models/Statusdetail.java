package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "statusdetails")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Statusdetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id", nullable = false)
    private Integer id;

    @Column(name = "status_name", nullable = false, length = 20)
    private String statusName;

    @OneToMany(mappedBy = "status")
    private Set<Task> tasks = new LinkedHashSet<>();

    @OneToMany(mappedBy = "status")
    private Set<Project> projects = new LinkedHashSet<>();

    @OneToMany(mappedBy = "status")
    private Set<Subscribersdetail> subscribersdetails = new LinkedHashSet<>();

    @OneToMany(mappedBy = "status")
    private Set<Bid> bids = new LinkedHashSet<>();

    @OneToMany(mappedBy = "status")
    @JsonBackReference
    private Set<Logininfo> logininfos = new LinkedHashSet<>();

    public Set<Logininfo> getLogininfos() {
        return logininfos;
    }

    public void setLogininfos(Set<Logininfo> logininfos) {
        this.logininfos = logininfos;
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

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }

    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}