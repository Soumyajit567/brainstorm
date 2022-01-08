package com.example.brainstorm.courses;

import com.example.brainstorm.user.Users;

import javax.persistence.*;

@Entity
@Table(name = "enrollment")
public class Enrollment {
    @Id
    @SequenceGenerator(
            name = "enrollment_sequence",
            sequenceName = "enrollment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "enrollment_sequence"
    )
    private Long enrollment_id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
    /*
        GRADE WILL GO HERE TOO!!!
     */

    public Enrollment() {
        super();
    }

    public Enrollment(Users users, Course course) {
        this.users = users;
        this.course = course;
    }

    public Long getEnrollment_id() {
        return enrollment_id;
    }

    public void setEnrollment_id(Long enrollment_id) {
        this.enrollment_id = enrollment_id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
