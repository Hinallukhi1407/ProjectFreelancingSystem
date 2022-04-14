package com.example.demo.Models;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "usertype")
public class Usertype {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_type_id", nullable = false)
    private Integer id;

    @Column(name = "user_type", nullable = false, length = 20)
    private String userType;

    @OneToMany(mappedBy = "userType")
    private Set<Logininfo> logininfos = new LinkedHashSet<>();

    public Set<Logininfo> getLogininfos() {
        return logininfos;
    }

    public void setLogininfos(Set<Logininfo> logininfos) {
        this.logininfos = logininfos;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}