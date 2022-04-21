package com.example.demo.Services;

import com.example.demo.Client.UserRepository;
import com.example.demo.Models.Userprofile;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServices {

    @Autowired
    public UserRepository repository;

    public void initEmpProfile(Userprofile newProfile) {
        repository.save(newProfile);
    }

    public Iterable<Userprofile> findAll(){
        return repository.findAll();
    }

    public  Userprofile add(Userprofile user)
    {
        return repository.save(user);
    }
    public Userprofile findDataById(Integer id){
        return repository.findUserById(id);
    }

    public Boolean Delete(Integer id)
    {
        if(repository.findById(id).isPresent())
        {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
    public Userprofile Update(Userprofile user,Integer id)
    {
//        user.setId(id);
//        Optional<Userprofile> emp1= repository.findById(id);
//        if(emp1.isPresent())
//        {
//            Userprofile e1=emp1.get();
//            e1.setCompanyName(user.getCompanyName());
//            e1.setProfileImage(user.getProfileImage());
//            e1.setCity(user.getCity());
//            e1.setMobileNo(user.getMobileNo());
//            return repository.save(e1);
//        }
//
//        return  null;
        if(repository.existsById(id)){
            Userprofile currentProfile = repository.findUserById(id);
            user.setId(id);
            if(user.getCity() == null) user.setCity(currentProfile.getCity());
            if (user.getLogin() == null) user.setLogin(currentProfile.getLogin());
            return repository.save(user);
        } else {
            return null;
        }


    }
}
