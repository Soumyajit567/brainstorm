import './Assignments.css'
import { useState} from "react";

const NewAg = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [course_id, setCourse_id] = useState('');



    //creates a new announcement
    const createAg = (e) => {
        e.preventDefault();
        const ag = {title, content};
        console.log("posting a new announcement")
        fetch('https://brainstormbackend.herokuapp.com/course/asgmts/' + ag.course_id, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ag)
        }).then(() => {
            props.setNewAg(!props.newAg)
            console.log('new announcement created')
        })
    }


    //returns the inputs for creating a new announcement
    return(
        <div className={"newAssignment"}>
            <h1 className={"agHeader"}> Create New Assignment </h1>
            <form onSubmit={createAg}>
                <label className={"agInputs"}> Assignment Title: </label>
                <input
                    type={"text"}
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label className={"agInputs"}> Assignment Content: </label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <label className={"agInputs"}> Assignment Course ID: </label>
                <input
                    type={"text"}
                    required
                    value={course_id}
                    onChange={(e) => setCourse_id(e.target.value)}
                />
                <button className={"createAg"}> Create Assignment </button>
            </form>
        </div>
    );
}

export default NewAg;