package com.example.demo.Models;

import javax.persistence.*;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private Userprofile user;

    @Column(name = "project_name", nullable = false, length = 100)
    private String projectName;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Column(name = "project_description", nullable = false, length = 250)
    private String projectDescription;

    @Column(name = "attachment", length = 100)
    private String attachment;

    @Column(name = "post_date", nullable = false)
    private Instant postDate;

    @Column(name = "completion_date", nullable = false)
    private Instant completionDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "status_id", nullable = false)
    private Statusdetail status;

    @OneToMany(mappedBy = "project")
    private Set<Task> tasks = new LinkedHashSet<>();

    @Column(name = "min_budget")
    private Double minBudget;

    @Column(name = "max_budget")
    private Double maxBudget;



    public Double getMinBudget() {
        return minBudget;
    }

    public void setMinBudget(Double minBudget) {
        this.minBudget = minBudget;
    }

    public Double getMaxBudget() {
        return maxBudget;
    }

    public void setMaxBudget(Double maxBudget) {
        this.maxBudget = maxBudget;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }

    public Statusdetail getStatus() {
        return status;
    }

    public void setStatus(Statusdetail status) {
        this.status = status;
    }

    public Instant getCompletionDate() {
        return completionDate;
    }

    public void setCompletionDate(Instant completionDate) {
        this.completionDate = completionDate;
    }

    public Instant getPostDate() {
        return postDate;
    }

    public void setPostDate(Instant postDate) {
        this.postDate = postDate;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
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