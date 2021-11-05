import { useState, useEffect } from 'react';
import './Courses.css'
import GradeList from "./GradeList";
import NewGrade from "./NewGrade";
const Grades = () => {

    const [grade, setGrade] = useState(null);
    const [newGrade, setNewGrade] = useState(false);

    //tells useEffect to rerender when a new course has been added
    const updateGrades = () => {
        setNewGrade(true);
    };
/*
    //fetches data on the first render
        useEffect(()=> {
            console.log('use effect has occurred');
            fetch('http://localhost:8000/grades').then(response => {
                console.log("retrieved grades")
                return response.json();
            })
                .then((data) => {
                    console.log(data)
                    setGrade(data)
                })
        }, [newGrade]);
*/
    return (

        //outputs courses
        <div className={"mainContent"}>
            <div>
                <NewGrade newGrade={newGrade} setNewGrade={setNewGrade}/>
                <h1> All Grades </h1>
            </div>
            {grade && <GradeList grades={grade} newGrade={newGrade} setNewGrade={setNewGrade}/>}
        </div>
    );
}

export default Grades;