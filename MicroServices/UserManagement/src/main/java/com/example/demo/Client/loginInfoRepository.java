package com.example.demo.Client;

import com.example.demo.Models.Logininfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface loginInfoRepository extends JpaRepository<Logininfo,Integer> {
    @Query(value = "select * from logininfo where email=?1", nativeQuery = true)
    Logininfo findByEmail(String email);
}
