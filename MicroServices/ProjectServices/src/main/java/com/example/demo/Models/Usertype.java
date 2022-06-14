package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "usertype")
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Getter
@Setter
public class Usertype {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_type_id", nullable = false)
    private Integer id;

    @Column(name = "user_type", nullable = false, length = 20)
    private String userType;

    @OneToMany(mappedBy = "userType")
    @JsonBackReference
    private Set<Logininfo> logininfos = new LinkedHashSet<>();
}