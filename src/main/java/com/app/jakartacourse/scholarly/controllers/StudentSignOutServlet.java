package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/signout")
public class StudentSignOutServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        logout(req,res);
    }
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        logout(req,res);
    }
    private void logout(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        HttpSession session = req.getSession(false);
        if(session != null){
            session.invalidate();
        }
        res.sendRedirect("signin.jsp?message=LoggedOutSuccessfully");
    }
}