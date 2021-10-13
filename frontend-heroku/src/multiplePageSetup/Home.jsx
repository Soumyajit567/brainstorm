import React from "react";
import './Home.css'
function Home() {
    return (
        <div className="home">
            <div>
                <p className={"title"}>
                    Welcome to Brainstorm
                </p>
                <img className={"homeLogo"} src="/photos/brainstorm%20logo%20no%20text.png" height={500} alt={""}/>
            </div>
        </div>
    );
}

export default Home;