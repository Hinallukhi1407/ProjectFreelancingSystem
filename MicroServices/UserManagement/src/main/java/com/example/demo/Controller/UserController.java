package com.example.demo.Controller;

import com.example.demo.Models.Userprofile;
import com.example.demo.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    public UserServices userServices;

    @GetMapping("/all")
    public @ResponseBody Iterable<Userprofile> all()
    {
            return userServices.findAll();
    }

    @GetMapping("/{id}")
    public @ResponseBody Userprofile findbyId(@PathVariable Integer id)
    {
        return  userServices.findAllById(id);
    }

    @DeleteMapping(path = "/{id}")
    public  @ResponseBody String DeleteUser(@PathVariable Integer id)
    {
        userServices.Delete(id);
        return "Deleted...";
    }

    @PostMapping("/add")
    public @ResponseBody Userprofile Insert(@RequestBody  Userprofile userprofile)
    {
        return userServices.add(userprofile);
    }

    @PutMapping("/update/{id}")
    public @ResponseBody Userprofile update(@RequestBody  Userprofile userprofile,@PathVariable Integer id)
    {
        return userServices.Update(userprofile,id);
    }
}
