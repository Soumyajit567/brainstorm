package com.example.brainstorm.courses.assignments;

import com.example.brainstorm.courses.Course;
import com.example.brainstorm.courses.Searchable;

import javax.persistence.*;
import java.io.File;
import java.net.URL;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "assignment")
public class Assignment implements Searchable {
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
    @Column(name = "asgmt_id", nullable = false)
    private Long asgmt_id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "desc", nullable = true)
    private String description;
    @Column(name = "total_points", nullable = false)
    private Integer total_points;
    @Column(name = "file", nullable = true)
    private File file;
    @Column(name = "url", nullable = true)
    private URL url;
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
    @OneToMany(mappedBy = "assignment", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<AssignmentSubmission> asgmt_submissions = new ArrayList<>();
    @Column(name = "due_date", nullable = true)
    private Date date;

    public Assignment(Long asgmt_id, String title, String description, File file, URL url) {
        this.asgmt_id = asgmt_id;
        this.title = title;
        this.description = description;
        this.file = file;
        this.url = url;
    }

    public Assignment() {
        super();
    }

    public Long getAsgmt_id() {
        return asgmt_id;
    }

    public void setAsgmt_id(Long asgmt_id) {
        this.asgmt_id = asgmt_id;
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

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public URL getUrl() {
        return url;
    }

    public void setUrl(URL url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Assignment{" +
                "asgmt_id=" + asgmt_id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", file=" + file +
                ", url=" + url +
                '}';
    }


    @Override
    public boolean contains(String searchedString) {
        return title.toLowerCase().contains(searchedString.toLowerCase()) || description.toLowerCase().contains(searchedString.toLowerCase());
    }
}
