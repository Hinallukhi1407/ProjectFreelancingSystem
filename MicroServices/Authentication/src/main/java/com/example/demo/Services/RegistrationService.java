package com.example.demo.Services;

import com.example.demo.Client.RegistrationRepository;
import com.example.demo.Client.StatusRepository;
import com.example.demo.Client.UserProfileRepository;
import com.example.demo.Models.*;
import lombok.extern.java.Log;
import net.bytebuddy.utility.RandomString;
import org.hibernate.usertype.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class RegistrationService {

    @Autowired
    public RegistrationRepository registrationRepository;
    public BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserProfileRepository userProfileRepository;

    @Autowired
    StatusRepository statusRepository;

   /* @Autowired
    private PasswordEncoder passwordEncoder;*/

    @Autowired
    private JavaMailSender mailSender;

    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);


    public boolean chklogin(String email, String password, HttpServletRequest request)
    {
        String finalHashtext = encryptionPassword(password);
        Logininfo reg1 = registrationRepository.findusers(email,finalHashtext);
        if(reg1.getEmail().equals(email) && reg1.getPassword().equals(finalHashtext)) {
            Usertype u1 = reg1.getUserType();

            if(u1.getId() == 1)
            {
                request.getSession().setAttribute("Admin",email);
            }
            else{
                request.getSession().setAttribute("User",email);
            }
            return true;
        }
        else {
            return false;
        }
    }

    public Logininfo chkLogin(String email){
        return registrationRepository.findByEmail(email);
    }

    public void Logout(HttpServletRequest request)
    {
        request.getSession().invalidate();
    }

    public Logininfo newRegistration(Logininfo registration, HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {

        if(!validate(registration.getEmail()) || registration.getPassword().length() < 8)
        {
            return  null;
        }
        registration.setVerificationCode(RandomString.make(64));
        registration.setPassword(new BCryptPasswordEncoder().encode(registration.getPassword()));

        if(registration.getUserType().getId() != 1)
        {
            sendVerificationEmail(registration, request.getRequestURL().toString());
        }

        Logininfo reg1= registrationRepository.save(registration);


        return reg1;
    }


    public String encryptionPassword(String password)
    {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(password.getBytes());

            BigInteger no = new BigInteger(1, messageDigest);

            String hashtext = no.toString(16);

            while (hashtext.length() < 32){
                hashtext = "0" + hashtext;
            }
           return hashtext;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    private void sendVerificationEmail(Logininfo registration, String siteURL)
            throws MessagingException, UnsupportedEncodingException {

        String toAddress = registration.getEmail();
        String fromAddress = "freelancingscape@gmail.com";
        String senderName = "FreelancingScape";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", registration.getEmail());
        String verifyURL = siteURL + "/verify?code=" + registration.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);
    }

    public boolean verify(String verificationCode) {
        Logininfo user = registrationRepository.findByVerificationCode(verificationCode);

        if (user == null || user.getStatus().getId() == 10) {
            return false;
        } else {
            Statusdetail status = statusRepository.getById(10);
            user.setVerificationCode("");
            user.setStatus(status);
            registrationRepository.save(user);

            return true;
        }

    }

    public static boolean validate(String emailStr) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
    }
}
