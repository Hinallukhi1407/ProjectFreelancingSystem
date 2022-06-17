package com.example.demo.Services;

import com.example.demo.Client.UserRepository;
import com.example.demo.Client.loginInfoRepository;
import com.example.demo.Models.Logininfo;
import com.example.demo.Models.Userprofile;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices {

    @Autowired
    public UserRepository repository;

    @Autowired
    public loginInfoRepository  loginInfoRepository;

    public void initEmpProfile(Userprofile newProfile) {
        repository.save(newProfile);
    }

    public Iterable<Userprofile> findAll(){
        return repository.findAll();
    }

    public Userprofile findbyLoginId(Integer id){
        return repository.findByLoginId(id);
    }
    public  Userprofile add(Userprofile user)
    {
        return repository.save(user);
    }
    public Logininfo findDataById(Integer id){
        return loginInfoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Given user is not available!!"));
    }

    public List<Logininfo> listfreelancer(){return loginInfoRepository.findFreelancer();}

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
