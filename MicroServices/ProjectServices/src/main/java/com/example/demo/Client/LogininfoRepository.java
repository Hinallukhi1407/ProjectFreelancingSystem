package com.example.demo.Client;

import com.example.demo.Models.Logininfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogininfoRepository extends JpaRepository<Logininfo, Integer> {
}