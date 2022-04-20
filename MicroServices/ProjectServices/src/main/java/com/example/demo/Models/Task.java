package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
@Table(name = "task")
//@JsonIgnoreProperties({"hibernateLazyInitializer"})
@JsonIdentityInfo(scope = Task.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Column(name = "task_name", nullable = false, length = 50)
    private String taskName;

    @Column(name = "task_description", nullable = false, length = 250)
    private String taskDescription;

    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @Column(name = "end_date", nullable = false)
    private Date endDate;

    @Column(name = "attachment", length = 100)
    private String attachment;

    @Column(name = "post_date", nullable = false)
    private Date postDate;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "payment_status", nullable = false,referencedColumnName = "status_id")
    private Statusdetail paymentStatus;

    @Column(name = "min_budget", nullable = false, precision = 5, scale = 2)
    private BigDecimal minBudget;

    @Column(name = "max_budget", nullable = false, precision = 5, scale = 2)
    private BigDecimal maxBudget;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "status_id", nullable = false)
    private Statusdetail status;

    public Task() {
    }

    public Task(Project project1, String projectName, String projectDescription, Date postDate, Date completionDate, String attachment, Date postDate1, Statusdetail status, double i, double i1, Statusdetail status1) {
        this.project=project1;
        this.taskName = projectName;
        this.taskDescription = projectDescription;
        this.startDate = postDate;
        this.endDate = completionDate;
        this.attachment= attachment;
        this.postDate = postDate1;
        this.paymentStatus=status;
        this.minBudget = BigDecimal.valueOf(i);
        this.maxBudget = BigDecimal.valueOf(i1);
        this.status = status1;

    }


    public Statusdetail getStatus() {
        return status;
    }

    public void setStatus(Statusdetail status) {
        this.status = status;
    }

    public BigDecimal getMaxBudget() {
        return maxBudget;
    }

    public void setMaxBudget(BigDecimal maxBudget) {
        this.maxBudget = maxBudget;
    }

    public BigDecimal getMinBudget() {
        return minBudget;
    }

    public void setMinBudget(BigDecimal minBudget) {
        this.minBudget = minBudget;
    }

    public Statusdetail getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(Statusdetail paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}