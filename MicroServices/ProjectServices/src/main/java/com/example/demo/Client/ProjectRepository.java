package com.example.demo.Client;

import com.example.demo.Models.Project;
import com.example.demo.Models.Task;
import com.example.demo.Models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project,Integer> {
    @Query(value = "select * from projects where user_id=?1", nativeQuery = true)
    List<Project> findByUserId(Integer id);

}
