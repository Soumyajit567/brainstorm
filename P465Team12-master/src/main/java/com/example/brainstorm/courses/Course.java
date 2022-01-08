package com.example.brainstorm.courses;

import com.example.brainstorm.courses.announcements.Announcement;
import com.example.brainstorm.courses.assignments.Assignment;
import com.example.brainstorm.courses.calendar.Event;
import com.example.brainstorm.user.Users;
import com.heroku.api.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.example.brainstorm.user.Users;

@Entity
@Table(name = "course")
public class Course {
    @Id
    @SequenceGenerator(
            name = "course_sequence",
            sequenceName = "course_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_sequence"
    )
    @Column(name = "course_id", nullable = false)
    private Long course_id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "description")
    private String description;
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Event> events = new ArrayList<>();
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Announcement> announcements = new ArrayList<>();
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Assignment> assignments = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "prof_id")
    private Users prof;


    public Course(Long course_id, String title, String description, List<Event> events, List<Announcement> announcements) {
        this.course_id = course_id;
        this.title = title;
        this.description = description;
        this.events = events;
        this.announcements = announcements;
    }

    public Course(String title, String description, List<Event> events, List<Announcement> announcements) {
        this.title = title;
        this.description = description;
        this.events = events;
        this.announcements = announcements;
    }

    public Course() {
        super();
    }
    public Long getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Long course_id) {
        this.course_id = course_id;
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

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public List<Announcement> getAnnouncements() {
        return announcements;
    }

    public void setAnnouncements(List<Announcement> announcements) {
        this.announcements = announcements;
    }



}
