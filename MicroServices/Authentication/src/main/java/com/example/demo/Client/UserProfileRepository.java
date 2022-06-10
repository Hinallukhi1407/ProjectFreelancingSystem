package com.example.demo.Client;
import com.example.demo.Models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserProfileRepository extends JpaRepository<Userprofile,Integer> {
}