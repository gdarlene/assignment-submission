package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

import com.app.jakartacourse.scholarly.models.Participant;
import com.app.jakartacourse.scholarly.models.UserRole;
import com.app.jakartacourse.scholarly.services.StudentService;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/signup")
public class StudentSignUpServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String userName = req.getParameter("userName");
        String firstName = req.getParameter("firstName");
        String lastName = req.getParameter("lastName");
        String classRoom = req.getParameter("classRoom");
        String password = req.getParameter("password");
        String email = req.getParameter("email");
        String gender = req.getParameter("gender");
        String phoneNum = req.getParameter("phoneNumber");
        String role = req.getParameter("role");
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
        participant.setFirstName(firstName);
        participant.setLastName(lastName);
        participant.setEmail(email);
        participant.setClassRoom(classRoom);
        participant.setPassword(password);
        participant.setGender(gender);
        participant.setPhoneNumber(phoneNum);
        participant.setRole(UserRole.valueOf(role));

        studentService.saveUser(participant);
        res.sendRedirect("signin.jsp?success=Success");
    }
}