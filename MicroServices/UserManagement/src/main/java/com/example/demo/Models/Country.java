package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "country")
@JsonIdentityInfo(scope = Country.class,
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "country_id", nullable = false)
    private Integer id;

    @Column(name = "country_name", nullable = false, length = 20)
    private String countryName;

    @Column(name = "coumtry_name")
    private String coumtryName;

    @OneToMany(mappedBy = "country")
    private Set<Statedetail> statedetails = new LinkedHashSet<>();

    public Set<Statedetail> getStatedetails() {
        return statedetails;
    }

    public void setStatedetails(Set<Statedetail> statedetails) {
        this.statedetails = statedetails;
    }

    public String getCoumtryName() {
        return coumtryName;
    }

    public void setCoumtryName(String coumtryName) {
        this.coumtryName = coumtryName;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}