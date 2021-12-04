import './Announcements.css'
import { useState} from "react";

const NewAnmt = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    var currTime =
    //creates a new announcement
    const createAnmt = (e) => {
        e.preventDefault();
        const anmt = {title, description};
        console.log("about to create assignment")
        console.log(JSON.stringify(anmt))
        fetch('https://brainstormbackend.herokuapp.com/course/anmts/4', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(anmt)
        }).then(() => {
            console.log("we have stringified and setting props!")
            props.setNewAnmt(!props.newAnmt)
            console.log('new announcement created')
        })
    }


    //returns the inputs for creating a new announcement
    return(
        <div className={"newAnnouncement"}>
            <h1 className={"anmtHeader"}> Create New Announcement </h1>
            <form onSubmit={createAnmt}>
                <label className={"anmtInputs"}> Announcement Title: </label>
                <input
                    type={"text"}
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label className={"anmtInputs"}> Announcement Content: </label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <li>

                </li>
                <button className={"createAnmt"}> Create Announcement </button>
            </form>
        </div>
    );
}

export default NewAnmt;