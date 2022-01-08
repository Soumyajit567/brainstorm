package com.example.brainstorm.courses.assignments;

import com.example.brainstorm.courses.Course;
import com.example.brainstorm.user.Users;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "assignment_submission")
public class AssignmentSubmission {
    @Id
    @SequenceGenerator(
            name = "assignment_sequence",
            sequenceName = "assignment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "assignment_sequence"
    )
    @Column(name = "asgmt_sub_id", nullable = false)
    private Long asgmt_sub_id;

    @Column(name = "points_earned", nullable = true)
    private Long points_earned;

    @ManyToOne
    @JoinColumn(name = "asgmt_id")
    private Assignment assignment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    @Column(name = "due_date", nullable = true)
    private Date date;


}
