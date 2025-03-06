package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

import com.app.jakartacourse.scholarly.models.Participant;
<<<<<<< HEAD
=======
import com.app.jakartacourse.scholarly.models.UserRole;
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
import com.app.jakartacourse.scholarly.services.StudentService;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/signup")
public class StudentSignUpServlet extends HttpServlet {
<<<<<<< HEAD
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String userName = req.getParameter("userName");
=======
    private static final long serialVersionUID = 1L;
    private StudentService studentService;
    public void init(){
        studentService = new StudentService();
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        register(req, res);
    }
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.sendRedirect("signup.jsp");
    }
    private void register(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String userName = req.getParameter("userName");
        String classRoom = req.getParameter("classRoom");
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
        String password = req.getParameter("password");
        String email = req.getParameter("email");
        String gender = req.getParameter("gender");
        String phoneNum = req.getParameter("phoneNumber");
<<<<<<< HEAD
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
=======
        if(areFieldsMissing(userName,classRoom,password,email,gender,phoneNum)){
            res.sendRedirect("signup.jsp?error=MissingFields");
        }
        if(studentService.getUserByEmail(email) != null){
            res.sendRedirect("signup.jsp?error=EmailAlreadyExists");
        }
        Participant participant = new Participant();
        participant.setUserName(userName);
        participant.setEmail(email);
        participant.setClassRoom(classRoom);
        participant.setPassword(password);
        participant.setGender(gender);
        participant.setPhoneNumber(phoneNum);
        studentService.saveUser(participant);
        res.sendRedirect("signin.jsp?success=Success");
    }
    private Boolean areFieldsMissing(String ... fields){
        for(String field : fields){
            if(field == null || field.isEmpty()){
                return true;
            }
        }
        return false;
    }
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
}