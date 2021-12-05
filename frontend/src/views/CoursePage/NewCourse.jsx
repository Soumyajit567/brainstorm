import './Courses.css'
import { useState } from "react";

const NewCourse = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //creates a new course
    const createCourse = (e) => {
        e.preventDefault();
        const course = {title, description};

        console.log('new course created')
        fetch('https://brainstormbackend.herokuapp.com/course/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(course)
        }).then(() => {
            props.setNewCourse(!props.newCourse)
        })

    }

    //returns the inputs for creating a new course
    return(
        <div className={"newCourse"}>
            <h1 className={"courseHeader"}> Create New Course </h1>
            <form onSubmit={createCourse}>
                <label className={"courseInputs"}> Course Title: </label>
                <input
                    type={"text"}
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>

                <label className={"courseInputs"}> Course Details: </label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className={"createCourse"}> Create Course </button>
            </form>
        </div>
    );
}

export default NewCourse;