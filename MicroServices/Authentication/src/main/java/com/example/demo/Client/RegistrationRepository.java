package com.example.demo.Client;

import com.example.demo.Models.Logininfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface RegistrationRepository extends JpaRepository<Logininfo,Integer> {
    @Query(value = "select * from logininfo where email = ?1 and password = ?2",nativeQuery = true)
    Logininfo findusers(String email, String password);


    @Query(value = "SELECT * FROM logininfo WHERE verification_code = ?1", nativeQuery = true)
    Logininfo findByVerificationCode(String verificationCode);

    Logininfo findByEmail(String email);
}
