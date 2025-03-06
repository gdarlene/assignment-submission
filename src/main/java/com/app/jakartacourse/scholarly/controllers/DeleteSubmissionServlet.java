package com.app.jakartacourse.scholarly.controllers;

import java.io.*;
<<<<<<< HEAD

import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "DeleteSubmissionServletServlet", value = "/DeleteSubmissionServlet-servlet")
public class DeleteSubmissionServlet extends HttpServlet {
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
import java.util.Objects;

import com.app.jakartacourse.scholarly.models.Participant;
import com.app.jakartacourse.scholarly.models.Submissions;
import com.app.jakartacourse.scholarly.services.SubmissionService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/deleteSubmission")
public class DeleteSubmissionServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        deletionProcess(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        deletionProcess(request, response);
    }

    protected void deletionProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        Participant participant = (Participant) session.getAttribute("user");

        if (participant == null || participant.getRole() != com.app.jakartacourse.scholarly.models.UserRole.STUDENT) {
            response.sendRedirect("login.jsp");
            return;
        }

        int submissionId = (int) Long.parseLong(request.getParameter("submissionId"));
        SubmissionService submissionService = new SubmissionService();
        Submissions submission = submissionService.getSubmissionById(submissionId);

        if (submission != null && Objects.equals(submission.getStudent().getId(), participant.getId())) {
            File file = new File(getServletContext().getRealPath("") + File.separator + submission.getSubmissionsPath());
            if (file.exists()) file.delete();
            submissionService.deleteSubmission(submissionId);
        }

        response.sendRedirect("studentDashboard.jsp");
    }
}
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
