import './LoginLabels.css'
import { BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import ResetPage from "./ResetPage";
import React, {useState} from "react";

//js file for the username, password, create account button, facebook button, and google button.

function Login() {
    const history = useHistory();
    //const goReset = () => history.push('/resetpage');
    const [reset, setReset] = useState(false);

    function showReset() {
        setReset(view => !view);
    }

    return (
        <body>
            <img className={"logo"} src="/photos/brainstorm%20logo%20cropped.png" height={125} alt={""}/>
            <p className={"header"}>Log In</p>
            <div className={"loginForm"}>
                <form>

                    <label className={"usernameLabel"} htmlFor={"username"}>
                        Username:
                    </label>

                    <input className={"usernameInput"} type={"text"} id={"username"} />

                    <label className={"passwordLabel"} htmlFor={"password"}>
                        Password:
                    </label>

                    <input className={"passwordInput"} type={"password"} id={"password"} />

                    <input className={"submitButton"} type={"submit"} value={"Log in"} />
                    <Link onClick={() => (showReset())}>
                        Reset Password
                    </Link>
                    {
                        reset && (<ResetPage/>)
                    }

                    <label htmlFor={"facebook"}>
                        <img className={"fbPic"}  src="/photos/facebook_sign_in.png" height={50} alt="submit"/>
                    </label>

                    <label htmlFor={"google"}>
                        <img className={"ggPic"} src="/photos/google_sign_in.png" height={50} alt="submit"/>
                    </label>
                </form>
            </div>
        </body>
    );
}

export default Login;

/*
this takes us to a new page localhost:3000/resetpage, but doesn't show the component.
                <Router>
                    <nav />
                    <Link to={"/resetpage"} onClick={() => (goReset())}>
                        Reset Password
                    </Link>
                    <Switch>
                        <Route path="/resetpage" exact component={ResetPage}/>
                    </Switch>
                    <nav />
                </Router>


                <Router>
                        <nav />
                        <Link to={"/resetpage"} >
                            Reset Password
                        </Link>
                        <Switch>
                            <Route path="/resetpage" exact component={ResetPage}/>
                        </Switch>
                        <nav />
                    </Router>
*/