package com.example.demo.Models;

import javax.persistence.*;

@Entity
@Table(name = "country")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "country_id", nullable = false)
    private Integer id;

    @Column(name = "country_name", nullable = false, length = 20)
    private String countryName;

    @Column(name = "coumtry_name")
    private String coumtryName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getCoumtryName() {
        return coumtryName;
    }

    public void setCoumtryName(String coumtryName) {
        this.coumtryName = coumtryName;
    }

}