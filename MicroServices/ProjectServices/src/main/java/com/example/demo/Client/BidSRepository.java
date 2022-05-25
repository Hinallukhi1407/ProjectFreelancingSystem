package com.example.demo.Client;

import com.example.demo.Models.Bid;
import com.example.demo.Models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BidSRepository extends JpaRepository<Bid,Integer> {
    @Query(value = "select * from bids where project_id=?1", nativeQuery = true)
    List<Bid> findByProjectId(Integer id);
}
