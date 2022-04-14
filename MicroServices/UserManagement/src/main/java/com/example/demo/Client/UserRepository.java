package com.example.demo.Client;


import com.example.demo.Models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<Userprofile,Integer> {

}
