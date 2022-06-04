package com.example.demo.Repository;

import com.example.demo.Models.Statedetail;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StateRepository extends JpaRepository<Statedetail,Integer> {
}
