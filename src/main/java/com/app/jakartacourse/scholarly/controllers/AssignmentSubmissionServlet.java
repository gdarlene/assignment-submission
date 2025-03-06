package com.app.jakartacourse.scholarly.controllers;

import java.io.*;
<<<<<<< HEAD

import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "AssignmentSubmissionServletServlet", value = "/AssignmentSubmissionServlet-servlet")
public class AssignmentSubmissionServlet extends HttpServlet {
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
import java.time.LocalDateTime;

import com.app.jakartacourse.scholarly.models.Assignment;
import com.app.jakartacourse.scholarly.models.Participant;
import com.app.jakartacourse.scholarly.models.Submissions;
import com.app.jakartacourse.scholarly.models.UserRole;
import com.app.jakartacourse.scholarly.services.SubmissionService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/submission")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 2,
        maxFileSize = 1024 * 1024 * 15, //the maximum file that can be uploaded
        maxRequestSize = 1024 * 1024 * 50
)
public class AssignmentSubmissionServlet extends HttpServlet {
    private static final String STORAGE_FOLDER = "assignment submissions";
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        HttpSession session =req.getSession();
        Participant participant = (Participant) session.getAttribute("participant");
        if (participant == null || participant.getRole() != com.app.jakartacourse.scholarly.models.UserRole.STUDENT) {
            res.sendRedirect("/studentSignin.jsp");
            return;
        }
        int assignmentId;
        try{
            assignmentId = Integer.parseInt(req.getParameter("assignmentId"));
        }catch(NumberFormatException e){
            res.sendRedirect("/studentSignin.jsp?error=InvalidAssignmentId");
            return;
        }
        Part filePart  = req.getPart("file");
        String submissionName = ensureFileSecurity(filePart.getSubmittedFileName());
        String storagePath = getServletContext().getRealPath("")+File.separator + STORAGE_FOLDER;
        File storageFolder = new File(storagePath);
        if(!storageFolder.exists()) storageFolder.mkdir();
        String submissionPath = storagePath + File.separator + submissionName;
        try{
            filePart.write(submissionPath);
        } catch(Exception e){
            res.sendRedirect("/studentSignin.jsp?error=UnableToUploadSubmission");
            return;
        }
        SubmissionService submissionService = new SubmissionService();
        Assignment assignment = submissionService.getAssignmentById(assignmentId).getAssignment();
        Submissions submissions = new Submissions();
        submissions.setAssignment(assignment);
        submissions.setStudent(participant);
        submissions.setSubmissionsPath(submissionPath);
        submissions.setSubmissionDate(LocalDateTime.now());
        submissionService.saveAssignSubmission(submissions);
        res.sendRedirect("/studentSignin.jsp?success=SuccessfullySubmittedAssignment");
    }
    private String ensureFileSecurity(String fileName) {
        return fileName.replaceAll("[^a-zA-Z0-9.-]", "_");
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
    }
}