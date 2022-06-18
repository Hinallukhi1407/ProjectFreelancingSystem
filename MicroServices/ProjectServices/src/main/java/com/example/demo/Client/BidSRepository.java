package com.example.demo.Client;


import com.example.demo.Models.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BidSRepository extends JpaRepository<Bid,Integer> {
    @Query(value = "select * from bids where project_id=?1", nativeQuery = true)
    List<Bid> findByProjectId(Integer id);

    @Query(value = "update bids set status_id=7 where bid_id=?1",nativeQuery = true)
    void acceptBid(Integer id);

    @Query(value = "update bids set status_id=8 where project_id=?1 and status_id!=7",nativeQuery = true)
    void rejectedAllBids(Integer id);

    @Query(value = "select bid_id, project_id, amount, bid_date, delivery_time,status_id, user_id from bids where user_id=?1", nativeQuery = true)
    List<Bid> findByFreelancerId(Integer id);
}
