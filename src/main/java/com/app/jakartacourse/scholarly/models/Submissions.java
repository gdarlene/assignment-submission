package com.app.jakartacourse.scholarly.models;

import java.time.LocalDateTime;

public class Submissions {
    private int id;
    private String filePath;
    private LocalDateTime submissionDate;
    private Assignment assignment;
    private UserRole student;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public LocalDateTime getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(LocalDateTime submissionDate) {
        this.submissionDate = submissionDate;
    }

    public Assignment getAssignment() {
        return assignment;
    }

    public void setAssignment(Assignment assignment) {
        this.assignment = assignment;
    }

    public UserRole getStudent() {
        return student;
    }

    public void setStudent(UserRole student) {
        this.student = student;
    }
}
