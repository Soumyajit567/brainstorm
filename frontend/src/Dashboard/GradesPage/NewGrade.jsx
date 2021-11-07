import { useState } from "react";

const NewGrade = (props) => {

    const [title, setTitle] = useState('');
    const [courseNum, setCourseNum] = useState('')
    const [userGrade, setUserGrade] = useState(0);
    const [totalGrade, setTotalGrade] = useState(0);
    const [prof, setProf] = useState('');

        //creates a new course
        const createCourse = (e) => {
            e.preventDefault();
            const course = {title, courseNum, userGrade, totalGrade, prof};

            fetch('http://localhost:8000/grades', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(course)
            }).then(() => {
                props.updateGrade()
                props.setNewGrade(!props.newGrade)
                console.log('new course created')
            })
        }

    //returns the inputs for creating a new course
    return(
        <div className={"newCourse"}>
            <h1 className={"courseHeader"}> Create New Grade </h1>
            <form onSubmit={createCourse}>
                <label className={"courseInputs"}> Grade Title: </label>
                <input
                    type={"text"}
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label className={"courseInputs"}> Course Number: </label>
                <input
                    type={"text"}
                    required
                    value={courseNum}
                    onChange={(e) => setCourseNum(e.target.value)}/>
                <label className={"courseInputs"}> User Grade: </label>
                <input
                    type={"number"}
                    required
                    value={userGrade}
                    onChange={(e) => setUserGrade(e.target.value)}
                />
                <label className={"courseInputs"}> Total Grade: </label>
                <input
                    type={"number"}
                    required
                    value={totalGrade}
                    onChange={(e) => setTotalGrade(e.target.value)}
                />
                <label className={"courseInputs"}> Course Instructor: </label>
                <input
                    type={"text"}
                    required
                    value={prof}
                    onChange={(e) => setProf(e.target.value)}
                />
                <button className={"createCourse"}> Create Grade </button>
            </form>
        </div>
    );
}

export default NewGrade;