package com.example.demo.Client;

import com.example.demo.Models.Logininfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface loginInfoRepository extends JpaRepository<Logininfo,Integer> {
    @Query(value = "select * from logininfo where email=?1", nativeQuery = true)
    Logininfo findByEmail(String email);

    @Query(value = "select * from logininfo where user_type_id=2", nativeQuery = true)
    List<Logininfo> findFreelancer();
}
