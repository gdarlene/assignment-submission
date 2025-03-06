package com.app.jakartacourse.scholarly.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
@Entity
@Table(name = "Submisisons")
public class Submissions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String submissionsPath;
    private LocalDateTime submissionDate;
    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private Assignment assignment;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Participant student;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubmissionsPath() {
        return submissionsPath;
    }

    public void setSubmissionsPath(String submissionsPath) {
        this.submissionsPath = submissionsPath;
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

    public Participant getStudent() {
        return student;
    }

    public void setStudent(Participant student) {
        this.student = student;
    }
}
