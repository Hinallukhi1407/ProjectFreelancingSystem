package com.example.demo.Models.Services;

import com.example.demo.Client.BidSRepository;
import com.example.demo.Models.Bid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BidsServices {

    @Autowired
    public BidSRepository bidSRepository;

    public Bid insertData(Bid bid) {
        return bidSRepository.save(bid);
    }

    public List<Bid> all() {
        return bidSRepository.findAll();
    }

    public Optional<Bid> getDataById(Integer id) {
        return bidSRepository.findById(id);
    }

    public Boolean DeleteTask(Integer id) {
        bidSRepository.deleteById(id);
        return bidSRepository.findById(id).isEmpty();
    }

    public Bid update(Bid bid, Integer id) {
        if (bidSRepository.existsById(id)) {
            Optional<Bid> bid1 = bidSRepository.findById(id);
            bid.setId(id);
            return bidSRepository.save(bid);
        } else {
            return null;
        }
    }

   public List<Bid> DisplayByProjectID(Integer id)
    {
        return bidSRepository.findByProjectId(id);
    }
}
