package com.example.demo.Client;

import com.example.demo.Models.Projectskill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectskillRepository extends JpaRepository<Projectskill, Integer> {

    @Query(value = "SELECT * FROM projectskills WHERE project_id=?1",nativeQuery = true)
    List<Projectskill> displaySkill(Integer id);
}