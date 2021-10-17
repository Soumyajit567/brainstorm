import { useState, useEffect } from 'react';
import './Courses.css'
import CourseList from "./CourseList";
import NewCourse from "./NewCourse";

const Courses = () => {

    const [course, setCourse] = useState(null);
    const [newCourse, setNewCourse] = useState(false);

    const updateCourses = () => {
        setNewCourse(true);
    };

    /*
    //fetches data on the first render
    useEffect(()=> {
        console.log('use effect has occurred');
        fetch('http://localhost:8000/courses').then(response => {
            return response.json();
        })
            .then((data) => {
                console.log(data)
                setCourse(data)
            })
    }, [newCourse]);
*/
    return (

        //outputs announcements
        <div className={"mainContent"}>
            <div>
                <NewCourse newCourse={newCourse} setNewCourse={setNewCourse}/>
                <h1> All Courses </h1>
            </div>
            {course && <CourseList courses={course} newCourse={newCourse} setNewCourse={setNewCourse}/>}
        </div>
    );
}

export default Courses;