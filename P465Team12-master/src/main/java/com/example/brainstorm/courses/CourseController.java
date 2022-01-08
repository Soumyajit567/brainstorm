package com.example.brainstorm.courses;

import com.example.brainstorm.courses.announcements.Announcement;
import com.example.brainstorm.courses.calendar.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("course")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping()
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }
    @GetMapping("/{course_id}")
    public Optional<Course> getCourse(@PathVariable Long course_id) {
        return courseService.getCourse(course_id);
    }

    @GetMapping("anmt/{course_id}")
    public List<Announcement> getAllCourseAnnouncements(@PathVariable Long course_id) {
        return courseService.getAllCourseAnnouncements(course_id);
    }

    @GetMapping("calendar/{course_id}")
    public List<Event> getAllCourseEvents(@PathVariable Long course_id) {
        return courseService.getAllCourseEvents(course_id);
    }

//    @PostMapping("ann/{course_id}")
//    public ResponseEntity addAnnouncement(@PathVariable Long course_id, @RequestBody Announcement announcement) {
//        Announcement savedAnnoucment = courseService.addAnnoucement(announcement);
//        return ResponseEntity.created(new URI("/ann/" + savedAnnoucement.getId())).body(savedAnnoucment);
//    }

    @PutMapping("/{course_id}")
    public ResponseEntity updateCourse(@PathVariable Long course_id, @RequestBody Course course) {
        Course currentCourse = courseService.getCourse(course_id).get();
        currentCourse.setTitle(course.getTitle());
        currentCourse.setDescription(course.getDescription());
        currentCourse = courseService.saveCourse(course);

        return ResponseEntity.ok(currentCourse);
    }

//    @GetMapping("calendar")


}
