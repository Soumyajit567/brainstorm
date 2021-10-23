import './LoginLabels.css'
import React from "react";

//js file for resetting for the password

function ResetPage() {



    return (
        <body>
            <div className={"reset"}>
                <label className={"emailLabel"} htmlFor={"text"}>
                    Email Address:
                </label>
                <input className={"usernameInput"} type={"text"} id={"email"} />
                <button className={"resetButton"} > Reset Password </button>
            </div>
        </body>
    );
}

export default ResetPage;