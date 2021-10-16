import React, { useState } from 'react';
import './Announcements.css'
import AnmtList from "./AnmtList";

function Announcements() {

    const [anmt, setAnmt] = useState([
        { title: 'announcement 1', body: 'lorem ipsum..', author: 'professor', id: 1}
    ]);

    return (
        <div className={"mainContent"}>
            <AnmtList anmts={anmt}/>

        </div>
    );
}
export default Announcements;
