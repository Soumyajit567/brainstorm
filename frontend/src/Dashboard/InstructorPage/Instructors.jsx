import { useState, useEffect } from 'react';
import './Instructors.css'
import InstructorList from "./InstructorList";
import NewInstructor from "./NewInstructor";

const Instructors = () => {

    const [instr, setInstr] = useState(null);
    const [newInstr, setNewInstr] = useState(false);

    //tells useEffect to rerender when a new course has been added
    const updateInstrs = () => {
        setNewInstr(true);
    };


    //fetches data on the first render
    useEffect(()=> {
        console.log('use effect has occurred');
        fetch('http://localhost:8000/instrs').then(response => {
            return response.json();
        })
            .then((data) => {
                console.log(data)
                setInstr(data)
            })
    }, [newInstr]);

    return (

        //outputs courses
        <div className={"mainContent"}>
            <div>
                <NewInstructor newInstr={newInstr} setNewInstr={setNewInstr}/>
                <h1> All Instructors </h1>
            </div>
            {instr && <InstructorList instrs={instr} newInstr={newInstr} setNewInstr={setNewInstr}/>}
        </div>
    );
}

export default Instructors;