package com.example.demo.Services;

import com.example.demo.Client.RegistrationRepository;
import com.example.demo.Models.Logininfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;


@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    RegistrationRepository registrationRepository;

    /*@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("javainuse".equals(username)) {
            return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }*/

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<Logininfo> reg=registrationRepository.findByEmail(username);
        if(reg.isPresent()){
            Logininfo registration = reg.get();

            return  User.builder().username(registration.getEmail()).password(registration.getPassword()).roles(registration.getUserType().getUserType()).build();
            //return new User(registration.getEmail(),registration.getPassword(),registration.getUserType().getUserType());
        }
        else {
            throw new UsernameNotFoundException("User Name is not Found");
        }
    }
}