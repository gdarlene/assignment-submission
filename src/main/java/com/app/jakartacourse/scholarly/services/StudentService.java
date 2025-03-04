package com.app.jakartacourse.scholarly.services;

import com.app.jakartacourse.scholarly.hibernate.HibernateUtil;
import com.app.jakartacourse.scholarly.models.Participant;
import com.app.jakartacourse.scholarly.models.UserRole;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.mindrot.jbcrypt.BCrypt;

public class StudentService {
    public void saveUser(Participant participant) {
        Transaction transaction = null;
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            transaction = session.beginTransaction();
            String hashedPassword = BCrypt.hashpw(participant.getPassword(),BCrypt.gensalt(12));
            participant.setPassword(hashedPassword);
            session.persist(participant);
            transaction.commit();
        }catch(Exception e){
            if(transaction != null) transaction.rollback();
                e.printStackTrace();
            }
        }
        public Participant getUserByEmail(String email) {
            try(Session session = HibernateUtil.getSessionFactory().openSession()){
                return session.createQuery("FROM Participant WHERE email= :email",Participant.class).setParameter("email", email).uniqueResult();
            }
    }
}
