package com.example.demo.Services;

import com.example.demo.Client.RegistrationRepository;
import com.example.demo.Models.Logininfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class UserDetailServiceImpl implements UserDetailsService {
    private final RegistrationService userService;

    @Override public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Logininfo logininfo = userService.chkLogin(username);
        if (logininfo == null) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(logininfo.getEmail(), logininfo.getPassword(), Collections.emptyList());
    }
}
