import React, { useState } from 'react';
import './Announcements.css'

function Announcements() {

    const [anmt, setAnmt] = useState('empty');
    const handlePost = () => {
        console.log('whaddup bro');
    }

    return (
        <div className={"mainContent"}>
            hello input an announcement

            <input onChange={e => setAnmt(e.target.value)} />
            <button onClick={() => {handlePost()}}> post announcement</button>

            <p>{anmt}</p>
        </div>
    );
}
export default Announcements;