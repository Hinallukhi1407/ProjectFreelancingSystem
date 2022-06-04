package com.example.demo.Repository;

import com.example.demo.Models.Membership;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberShipPlanRepository extends JpaRepository<Membership,Integer> {
}
