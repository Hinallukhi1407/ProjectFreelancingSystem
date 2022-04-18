package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "city")
@JsonIdentityInfo(scope = City.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id", nullable = false)
    private Integer id;

    @Column(name = "city_name", nullable = false, length = 20)
    private String cityName;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "state_id", nullable = false)
    private Statedetail state;

    @OneToMany(mappedBy = "city")
    private Set<Userprofile> userprofiles = new LinkedHashSet<>();

    public Set<Userprofile> getUserprofiles() {
        return userprofiles;
    }

    public void setUserprofiles(Set<Userprofile> userprofiles) {
        this.userprofiles = userprofiles;
    }

    public Statedetail getState() {
        return state;
    }

    public void setState(Statedetail state) {
        this.state = state;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}