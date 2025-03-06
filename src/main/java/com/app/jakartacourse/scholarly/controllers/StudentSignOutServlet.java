package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

<<<<<<< HEAD
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "StudentSignOutServletServlet", value = "/StudentSignOutServlet-servlet")
public class StudentSignOutServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        // Hello
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>" + message + "</h1>");
        out.println("</body></html>");
    }

    public void destroy() {
=======
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
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
    }
}