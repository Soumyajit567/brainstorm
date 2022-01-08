package com.example.brainstorm.user;

import com.example.brainstorm.courses.Course;
import com.example.brainstorm.courses.Enrollment;
import com.example.brainstorm.courses.Searchable;
import com.example.brainstorm.courses.announcements.Announcement;
import com.example.brainstorm.courses.announcements.AnnouncementController;
import com.example.brainstorm.courses.calendar.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    /**
     * The main logic layer. Called upon by
     * UserController.
     */

    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AnnouncementController annController;

    /**
     * <p>Constructor</p>
     * @param userRepository the data access layer for users
     */
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * <p>
     * Registers a new user
     * Checks if a given username is already taken.
     * If not, encodes password and saves the new user.
     *</p>
     *
     * @param user a potential new user
     * @return the newly registered user
     * @throws Exception
     */
    public Users register(Users user) throws Exception {
        if (checkIfUserExists(user.getUsername())) {
            throw new Exception();
        }
        hashPassword(user);
        return userRepository.save(user);
    }


    /**
     * <p>
     * Checks if username exists in database.
     * If so, checks password to allow login.
     * </p>
     *
     * @param username the sent username
     * @param password the sent password
     * @return the logged-in user
     * @throws Exception
     */
    public Users login(String username, String password) throws Exception {
        Users existingUser = userRepository.findByUsername(username);
        if (existingUser == null) {
            System.out.println("user dne");
           //the user doesn't exist
            throw new Exception();
        } else {
            if (passwordEncoder.matches(password, existingUser.getPassword())) {
                return existingUser;
            } else {
                System.out.println("password mismatch");
                throw new Exception();
            }
        }
    }


    /**
     * Encodes password for storage. Uses hashing function.
     * @param user the user who's password will be hashed
     */
    public void hashPassword(Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
    }

    /**
     * Checks if user exists within database.
     *
     * @param username the potenial user's username
     * @return true if user exists, false if not
     */
    private boolean checkIfUserExists(String username) {
        return userRepository.findByUsername(username) != null ? true : false;
    }

    /**
     * Updates reset token for a user within database.
     *
     * @throws Exception
     */
    public void updateResetToken(String token, String email) throws Exception{
        Users user = userRepository.findByEmail(email);
        if (user != null) {
            user.setReset_token(token);
            userRepository.save(user);
        } else {
            throw new Exception("There is no user with an email of " + email);
        }
    }

    /**
     * Service layer step for finding a User
     * with a given research token.
     *
     * @param token the user's reset token
     * @return Users object with given reset token
     */
    public Users getByResetToken(String token){
        return userRepository.findByResetToken(token);
    }


    /**
     * <p>
     *  Updates password and resets a user's reset token.
     * </p>
     * @param user the user who's password will be updated
     * @param newPass the user's new password
     */
    public void updatePassword(Users user, String newPass){
        String encryptedPass = passwordEncoder.encode(newPass);
        user.setPassword(encryptedPass);
        user.setReset_token(null);
        userRepository.save(user);
    }

    /**
     * <p>Get all the event's associated with a specific user</p>
     * @param user_id the specific user's id
     * @return a list of all events associated with the specific user
     */
    public List<Event> getUserEvents(Long user_id) {
        List<Enrollment> enrollment = userRepository.getById(user_id).getEnrollment();
        List<Event> eventsFromEnrollment = new ArrayList<>();
        for(int i = 0; i<enrollment.size();i++) {
            Course course = enrollment.get(i).getCourse();
            eventsFromEnrollment.addAll(course.getEvents());
        }
        return eventsFromEnrollment;

    }

//    public List<Event> getUserWeeklyEvents(Long user_id) {
//        List<Enrollment> enrollment = userRepository.getById(user_id).getEnrollment();
//        List<Event> eventsFromEnrollment = new ArrayList<>();
//        for(int i = 0; i<enrollment.size();i++) {
//            Course course = enrollment.get(i).getCourse();
//            eventsFromEnrollment.addAll(course.getEvents());
//        }
//        return eventsFromEnrollment;
//    }


    /**
     * <p>Get a list of all announcements associated with a user</p>
     * @param user_id the specific user's id
     * @return a list of all announcements associated with a user
     */
    public List<Announcement> getUserAnnouncements(long user_id){
        List<Enrollment> enrollment = userRepository.getById(user_id).getEnrollment();
        List<Announcement> announcementsFromEnrollment = new ArrayList<>();
        for(int i = 0; i<enrollment.size();i++) {
            Course course = enrollment.get(i).getCourse();
            announcementsFromEnrollment.addAll(course.getAnnouncements());
        }
        return announcementsFromEnrollment;
    }


    /**
     * <p>
     *     Returns all courses associated with the specific User
     * </p>
     *
     * @param user_id the user's unique ID
     * @return the list of all courses associated with this user
     */
    public List<Course> getUserCourses(Long user_id) {
        List<Enrollment> enrollment = userRepository.getById(user_id).getEnrollment();
        List<Course> courses = new ArrayList<>();
        for(int i = 0; i<enrollment.size();i++) {
            Course course = enrollment.get(i).getCourse();
            courses.add(course);
        }
        return courses;

    }
  
    @PostMapping
    public ResponseEntity addAnnouncement(@RequestBody Announcement announcement) throws URISyntaxException {
        return annController.addAnnouncement(announcement);
    }

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }


    /**
     * Service Layer step for search functionality
     *
     * Given a searched string and user id, get all Searchable objects
     * for the given user
     *
     * @param user_id
     * @param searchedString
     * @return List of Searchable objects that contain searchString
     */
    public List<Searchable> getSearchEntities(Long user_id, String searchedString) {
        List<Course> courses = getUserCourses(user_id);
        List<Searchable> results = new ArrayList<>();
        for (Course course: courses) {
            for(Event event : course.getEvents()) {
                if (event.contains(searchedString)) results.add(event);
            }
            for(Announcement announcement : course.getAnnouncements()) {
                if (announcement.contains(searchedString)) results.add(announcement);
            }
        }
        return results;
    }

    public Users getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public List<Event> getSearchedEvents(Long user_id, String searchedString) {
        List<Course> courses = getUserCourses(user_id);
        List<Event> results = new ArrayList<>();
        for (Course course: courses) {
            for (Event event : course.getEvents()) {
                if (event.contains(searchedString)) results.add(event);
            }
        }
        return results;
    }

    public List<Announcement> getSearchedAnnouncements(Long user_id, String searchedString) {
        List<Course> courses = getUserCourses(user_id);
        List<Announcement> results = new ArrayList<>();
        for (Course course: courses) {
            for(Announcement announcement : course.getAnnouncements()) {
                if (announcement.contains(searchedString)) results.add(announcement);
            }
        }
        return results;
    }
}
