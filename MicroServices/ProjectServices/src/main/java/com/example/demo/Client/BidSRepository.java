package com.example.demo.Client;

import com.example.demo.Models.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidSRepository extends JpaRepository<Bid,Integer> {
    //List<Bid> findByProjectId(Integer id);
}
