package com.example.demo.Client;

import com.example.demo.Models.Freelancerskill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FreelancerSkillRepository extends JpaRepository<Freelancerskill,Integer> {
    @Query(value = "SELECT * FROM freelancerskills WHERE freelancer_id=?1",nativeQuery = true)
    List<Freelancerskill> displaySkill(Integer id);
}
