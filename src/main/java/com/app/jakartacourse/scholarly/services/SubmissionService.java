package com.app.jakartacourse.scholarly.services;

<<<<<<< HEAD
public class SubmissionService {
=======
import com.app.jakartacourse.scholarly.hibernate.HibernateUtil;
import com.app.jakartacourse.scholarly.models.Submissions;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class SubmissionService {

    public void saveAssignSubmission(Submissions submissions) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.persist(submissions);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

    public List<Submissions> getSubmissionsByAssignment(int assignmentId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM Submissions WHERE assignment.id = :assignmentId", Submissions.class)
                    .setParameter("assignmentId", assignmentId)
                    .list();
        }
    }

    public Submissions getSubmissionByStudentAndAssignmentById(int studentId, int assignmentId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM Submissions WHERE student.id = :studentId AND assignment.id = :assignmentId", Submissions.class)
                    .setParameter("studentId", studentId)
                    .setParameter("assignmentId", assignmentId)
                    .uniqueResult();
        }
    }

    public Submissions getSubmissionById(int submissionId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Submissions.class, submissionId);
        }
    }
    public Submissions getAssignmentById(int submissionId) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Submissions.class, submissionId);
        }
    }
    public void deleteSubmission(int submissionId) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            Submissions submission = session.get(Submissions.class, submissionId);
            if (submission != null) {
                session.remove(submission);
            }
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        }
    }

>>>>>>> 37c9f61a6261686ecd241e47505ed1afc702ee4b
}
