package com.example.brainstorm.user;

import com.example.brainstorm.courses.Course;
import com.example.brainstorm.courses.Enrollment;
import com.example.brainstorm.courses.assignments.AssignmentSubmission;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    /**
     * A basic User object that stores all User variables.
     */
    private long user_id;
    @Column(nullable = false, unique = true, length = 45)
    private String username;
    @Column(nullable = false, length = 64)
    private String password;
    @Column(nullable = false, length = 45)
    private String first_name;
    @Column(nullable = false, length = 45)
    private String last_name;
    @Column(nullable = false, length = 64)
    private String email;
    @Column(nullable = false, length = 64)
    private String answer1;
    @Column(nullable = false, length = 64)
    private String answer2;
    @Column(nullable = false)
    private Roles role;
    @Column(nullable = true, length = 30)
    private String resetToken;
    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Enrollment> enrollment = new ArrayList<>();
    @OneToMany(mappedBy = "prof", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Course> instructorCourses = new ArrayList<>();
    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<AssignmentSubmission> submissions = new ArrayList<>();
    
    public Users() {
        super();
    }

    public Users(String username,
                 String password,
                 String first_name,
                 String last_name,
                 String email,
                 String answer1,
                 String answer2, Roles role,
                List<Enrollment> enrollment) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.role = role;
        this.enrollment = enrollment;
    }

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long id) {
        this.user_id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String firstName) {
        this.first_name = firstName;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String lastName) {
        this.last_name = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAnswer1() {
        return answer1;
    }

    public void setAnswer1(String answer1) {
        this.answer1 = answer1;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public String getAnswer2() {
        return answer2;
    }

    public void setAnswer2(String answer2) {
        this.answer2 = answer2;
    }



    public List<Enrollment> getEnrollment() {
        return enrollment;
    }

    public void setEnrollment(List<Enrollment> enrollment) {
        this.enrollment = enrollment;
    }

    public void appendEnrollment(Enrollment enrollment) {
        this.enrollment.add(enrollment);
      
    }
  
    public String getResetToken() {
        return resetToken;
    }

    public void setReset_token(String resetToken) {
        this.resetToken = resetToken;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + first_name + '\'' +
                ", lastName='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", answer1='" + answer1 + '\'' +
                ", answer2='" + answer2 + '\'' +
                ", role='" + role + '\'' +
                ", enrollment" + enrollment.toString() +
                '}';
    }

    public enum Roles {
        STUDENT, INSTRUCTOR, ADMIN
    }
}
