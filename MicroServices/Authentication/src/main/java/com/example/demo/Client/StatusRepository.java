package com.example.demo.Client;

import com.example.demo.Models.Statusdetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Statusdetail, Integer> {

}
