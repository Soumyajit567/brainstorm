import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Home, About, Login, Register } from "./multiplePageSetup";
import React from 'react';
import {Announcements, StudentCalendar} from "./Dashboard";

function App() {

  return (
      <div>
        <Router>
          <div>
            <nav />
            <ul className={"NavLinksContainer"}>
              <li>
                <Link className={"headerLinks"} to="/"> Home</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/login">Login</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/about">About</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/register">Register</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/studentcalendar">Calendar</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/announcements">Announcements</Link>
              </li>
            </ul>
            <nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/about" exact component={About} />
              <Route path="/register" exact component={Register} />
              <Route path="/studentcalendar" exact component={StudentCalendar} />
              <Route path="/announcements" exact component={Announcements} />

            </Switch>
          </div>
        </Router>
      </div>

  );
}

export default App;