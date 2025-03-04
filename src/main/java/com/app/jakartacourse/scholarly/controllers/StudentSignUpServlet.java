package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

import com.app.jakartacourse.scholarly.models.Participant;
import com.app.jakartacourse.scholarly.services.StudentService;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/signup")
public class StudentSignUpServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String userName = req.getParameter("userName");
        String password = req.getParameter("password");
        String email = req.getParameter("email");
        String gender = req.getParameter("gender");
        String phoneNum = req.getParameter("phoneNumber");
        if (userName.isEmpty() || password.isEmpty() || email.isEmpty() || gender.isEmpty() || phoneNum.isEmpty()){
            res.sendRedirect("studentSignup.jsp?error=MissingFields");
        }
        StudentService studentService = new StudentService();
        if (studentService.getUserByEmail(email) != null){
            res.sendRedirect("studentSignup.jsp?error=EmailAlreadyExists");
            return;
        }
        Participant participant = new Participant();
        participant.setUserName(userName);
        participant.setPassword(password);
        participant.setEmail(email);
        participant.setGender(gender);
        participant.setPhoneNumber(phoneNum);

        studentService.saveUser(participant);
        res.sendRedirect("signin.jsp?success=Success");
    }
}