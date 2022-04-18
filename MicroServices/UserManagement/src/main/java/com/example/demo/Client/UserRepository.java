package com.example.demo.Client;


import com.example.demo.Models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;


public interface UserRepository extends JpaRepository<Userprofile,Integer> {
    @Query(value = "select * from userprofile where user_id=?1", nativeQuery = true)
    Userprofile findUserById(Integer id);
}
