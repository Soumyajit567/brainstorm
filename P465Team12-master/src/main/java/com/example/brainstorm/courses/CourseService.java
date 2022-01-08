package com.example.brainstorm.courses;

import com.example.brainstorm.courses.announcements.Announcement;
import com.example.brainstorm.courses.calendar.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;
    public Optional<Course> getCourse(Long course_id) {
        return courseRepository.findById(course_id);
    }

    public List<Announcement> getAllCourseAnnouncements(Long course_id) {
        Optional<Course> course = courseRepository.findById(course_id);
        if (!course.isPresent()) {
            return null;
        }
        return course.get().getAnnouncements();
    }

    public List<Event> getAllCourseEvents(Long course_id) {
        Optional<Course> course = courseRepository.findById(course_id);
        if (!course.isPresent()) {
            return null;
        }
        return course.get().getEvents();
    }

//    public List<Event> getAllEventsInRange(Long course_id, String start, String end) throws ParseException {
//       return List.of(null);
//    }

    public Announcement addAnnoucement(Announcement announcement) {
        return announcement;
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
}
