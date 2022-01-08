import './Announcements.css'
import { useState} from "react";

const NewAnmt = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [course_id, setCourse_id] = useState('');
    const [announcementDate, setAnnouncementDate] = useState("2021-11-14T00:00:00");


    //creates a new announcement
    const createAnmt = (e) => {
        e.preventDefault();
        const anmt = {title, description, course_id, announcementDate};
        console.log("posting a new announcement")
        fetch('https://brainstormbackend.herokuapp.com/course/anmt/' + anmt.course_id, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(anmt)
        }).then(() => {
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
                <label className={"anmtInputs"}> Announcement Course ID: </label>
                <input
                    type={"text"}
                    required
                    value={course_id}
                    onChange={(e) => setCourse_id(e.target.value)}
                />
                <button className={"createAnmt"}> Create Announcement </button>
            </form>
        </div>
    );
}

export default NewAnmt;