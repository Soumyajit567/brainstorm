import { useState, useEffect } from 'react';
import './Announcements.css'
import AnmtList from "./AnmtList";
import NewAnmt from "./NewAnmt";

const Announcements = () => {

    const [anmt, setAnmt] = useState(null);
    const [newAnmt, setNewAnmt] = useState(false);

    const updateAnmts = () => {
        setNewAnmt(true);
    };

    //fetches data on the first render
    useEffect(()=> {
        console.log('use effect has occurred');
        fetch('http://localhost:8000/anmts').then(response => {
            return response.json();
        })
            .then((data) => {
                console.log(data)
                setAnmt(data)
            })
    }, [newAnmt]);

    //deletes announcement
   /*
    useEffect(()=> {
        console.log('delete announcement')
    });
*/



    return (

        //outputs announcements
        <div className={"mainContent"}>
            <div>
                <NewAnmt newAnmt={newAnmt} setNewAnmt={setNewAnmt}/>
                <h1> All Announcements </h1>
            </div>
            {anmt && <AnmtList announcements={anmt}/>}
        </div>
    );
}

export default Announcements;