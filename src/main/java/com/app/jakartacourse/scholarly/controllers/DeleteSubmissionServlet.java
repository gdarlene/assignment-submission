package com.app.jakartacourse.scholarly.controllers;

import java.io.*;
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
