package com.app.jakartacourse.scholarly.controllers;

import java.io.*;

<<<<<<< HEAD
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "StudentSignInServletServlet", value = "/StudentSignInServlet-servlet")
public class StudentSignInServlet extends HttpServlet {
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
    }
}
=======
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
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
