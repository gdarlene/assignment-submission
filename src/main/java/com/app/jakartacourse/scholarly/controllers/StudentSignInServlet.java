package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

import com.app.jakartacourse.scholarly.models.Participant;
import com.app.jakartacourse.scholarly.services.StudentService;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.mindrot.jbcrypt.BCrypt;

@WebServlet("/signin")
public class StudentSignInServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private StudentService studentService;
    public void init(){
        studentService = new StudentService();
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse res)throws IOException{
        authenticate(req,res);
    }
    protected void doGet(HttpServletRequest req, HttpServletResponse res)throws IOException{
        res.sendRedirect("/signin.jsp");
    }
    private void authenticate(HttpServletRequest req, HttpServletResponse res)throws IOException{
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        if (areFieldsMissing(email,password)){
            res.sendRedirect("signin.jsp?error=MissingFields");
            return;
        }
        Participant participant=studentService.getUserByEmail(email);
        if (participant == null || !BCrypt.checkpw(password,participant.getPassword())){
            res.sendRedirect("signin.jsp?error=InvalidCredentials");
            return;
        }
        HttpSession session = req.getSession();
        session.setAttribute("participant",participant);
        session.setMaxInactiveInterval(30 * 60);
        res.sendRedirect("/studentsDashboard");
    }
    private Boolean areFieldsMissing(String ... fields){
        for(String field : fields){
            if(field == null || field.isEmpty()){
                return true;
            }
        }
        return false;
    }
}
