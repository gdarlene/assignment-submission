package com.app.jakartacourse.scholarly.models;

<<<<<<< HEAD
import java.time.LocalDate;

public class Assignment {
    private int id;
    private String title;
=======
import jakarta.persistence.*;
import jakarta.servlet.http.Part;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table (name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private Participant instructor;

    @OneToMany(mappedBy = "assignment" , cascade = CascadeType.ALL)
    private List<Submissions> submissions;
    @ManyToOne
    @JoinColumn(name = "author")
    private Participant author;
>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
    private String description;
    private LocalDate deadLine;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(LocalDate deadLine) {
        this.deadLine = deadLine;
    }
}
