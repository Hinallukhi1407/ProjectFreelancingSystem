package com.example.demo.Client;

import com.example.demo.Models.Projectskill;
import com.example.demo.Models.ProjectskillId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectskillRepository extends JpaRepository<Projectskill, ProjectskillId> {
}