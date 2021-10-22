import './Instructors.css'
import { useState } from "react";

const NewInstructor = (props) => {

    const [instrName, setInstrName] = useState('');
    const [instrNum, setInstrNum] = useState('')
    const [content, setContent] = useState('');
    const [prof, setProf] = useState('');


    //creates a new course
    const createInstr = (e) => {
        e.preventDefault();
        const instr = {instrName, instrNum, content, prof};

        fetch('http://localhost:8000/instr', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(instr)
        }).then(() => {
            props.setNewInstr(!props.newInstr)
            console.log('new instructor created')
        })

    }

    //returns the inputs for creating a new course
    return(
        <div className={"newInstr"}>
            <h1 className={"instrHeader"}> Create New Instructor </h1>
            <form onSubmit={createInstr}>
                <label className={"instrInputs"}> Instructor Name: </label>
                <input
                    type={"text"}
                    required
                    value={instrName}
                    onChange={(e) => setInstrName(e.target.value)}/>
                <label className={"instrInputs"}> Instructor Number: </label>
                <input
                    type={"text"}
                    required
                    value={instrNum}
                    onChange={(e) => setInstrNum(e.target.value)}/>
                <label className={"instrInputs"}> Instructor Details: </label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <label className={"instrInputs"}> Course Administrator: </label>
                <input
                    type={"text"}
                    required
                    value={prof}
                    onChange={(e) => setProf(e.target.value)}
                />
                <button className={"createInstr"}> Create Instructor </button>
            </form>
        </div>
    );
}

export default NewInstructor;