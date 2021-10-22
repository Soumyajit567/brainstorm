import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Home, About, Login, Register } from "./multiplePageSetup";
import React from 'react';
import {Announcements, StudentCalendar, Courses, User, Instructors} from "./Dashboard";

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
                <Link className={"headerLinks"} to="/about">About</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/login">Login</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/register">Register</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/studentcalendar">Calendar</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/courses">Courses</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/announcements">Announcements</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/user">Users</Link>
              </li>
              <li>
                <Link className={"headerLinks"} to="/instructors">Instructors</Link>
              </li>
            </ul>
            <nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/courses" exact component={Courses} />
              <Route path="/studentcalendar" exact component={StudentCalendar} />
              <Route path="/announcements" exact component={Announcements} />
              <Route path="/user" exact component={User} />
              <Route path="/instructors" exact component={Instructors} />
            </Switch>
          </div>
        </Router>
      </div>

  );
}

export default App;