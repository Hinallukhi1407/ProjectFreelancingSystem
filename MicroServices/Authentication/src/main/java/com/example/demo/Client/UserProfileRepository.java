package com.example.demo.Client;
import com.example.demo.Models.Logininfo;
import com.example.demo.Models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserProfileRepository extends JpaRepository<Userprofile,Integer> {

}