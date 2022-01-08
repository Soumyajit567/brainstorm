
import { useState} from "react";

const NewMsg = (props) => {

    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
    const [course_id, setCourse_id] = useState('');


    //creates a new announcement
    const createMsg = (e) => {
        e.preventDefault();
        const msg = {text, username, course_id};
        console.log("posting a new announcement")
        fetch('https://brainstormbackend.herokuapp.com/course/msgs/4', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(msg)
        }).then(() => {
            props.setNewMsg(!props.newMsg)
            console.log('new announcement created')
        })
    }


    //returns the inputs for creating a new announcement
    return(
        <div className={"newAnnouncement"}>
            <h1 className={"anmtHeader"}> Create New Message </h1>
            <form onSubmit={createMsg}>
                <label className={"anmtInputs"}> Message Text: </label>
                <input
                    type={"text"}
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
                <label className={"anmtInputs"}> Username: </label>
                <textarea
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className={"createAnmt"}> Send Message </button>
            </form>
        </div>
    );
}

export default NewMsg;