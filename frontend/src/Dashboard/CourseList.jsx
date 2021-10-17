const CourseList = ({courses, newCourse, setNewCourse}) => {
/*
    const deleteCourse= (e) => {
        fetch('http://localhost:8000/courses/' + e, {
            method: 'DELETE'
        }).then(() => {
            setNewCourse(!newCourse)
            console.log("deleted a course")
        })
    }
*/
    return (
        <div className="course-list">
            {courses.map((course) => (
                <div className={"course-preview"} key={course.id}>
                    <h2 className={"courseTitle"}>{ course.title }</h2>
                    <h3 className={"courseNumber"}>{ course.courseNum }</h3>
                    <div className={"courseContent"}>
                        {course.content}
                    </div>
                    <p className={"createdBy"}>Created by Course Instructor {course.prof}</p>
                    <button className={"deleteCourse"} /*onClick={() => (deleteCourse(course.id))}*/> Delete Course </button>
                </div>
            ))}
        </div>
    );
}

export default CourseList;