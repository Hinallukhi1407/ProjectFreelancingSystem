package com.example.demo.Controller;


import com.example.demo.Client.RegistrationRepository;
import com.example.demo.Models.Logininfo;
import com.example.demo.Services.JwtUserDetailsService;
import com.example.demo.Services.RegistrationService;
import com.example.demo.config.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;


@RestController
@RequestMapping("/auth")
public class Authentication {



    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;


    public final RegistrationRepository registrationRepository;
    @Autowired
    public RegistrationService registrationService;


    public Authentication(RegistrationRepository registrationRepository)
    {
        this.registrationRepository=registrationRepository;
    }

    @GetMapping("/all")
    public  Iterable<Logininfo> getData(){

        return registrationRepository.findAll();
    }

    @PostMapping("/login")
    boolean Login(@RequestParam String email, @RequestParam String password, HttpServletRequest request)
    {
        return registrationService.chklogin(email,password,request);
    }

    @PostMapping(value = "/reg")
    Logininfo regUser(@RequestBody Logininfo registration, HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {
        System.out.println(registration);
        return registrationService.newRegistration(registration, request);
    }

    @PostMapping("/logout")
    void logout(HttpServletRequest request)
    {
       registrationService.Logout(request);
    }


    @GetMapping("/reg/verify")
    public String verifyUser(@RequestParam("code") String code) {
        if (registrationService.verify(code)) {
            return "verify_success";
        } else {
            return "verify_fail";
        }
    }


    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public String createAuthenticationToken(@ModelAttribute Logininfo logininfo) throws Exception {
//        System.out.println(authenticationRequest);
       //authenticate(logininfo.getEmail(), logininfo.getPassword());

//        final UserDetails userDetails = userDetailsService
//                .loadUserByUsername(authenticationRequest.getEmail());
//        System.out.println(userDetails);
    final String token = jwtTokenUtil.doGenerateToken(logininfo.getEmail());
//
       return token;

//        return "hello";
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
