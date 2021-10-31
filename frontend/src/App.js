
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./themes";
import {Home, About, Login, Register, Announcements, StudentCalendar, Courses, User, Instructors} from "./Dashboard";
import Navbar from './Dashboard/Components/Navbar';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
      <ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
        <GlobalStyles/>
        <StyledApp>
          <div>
            <Router>
              <Navbar/>
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/courses" exact component={Courses} />
                  <Route path="/studentcalendar" exact component={StudentCalendar} />
                  <Route path="/calendar" exact component={StudentCalendar} />
                  <Route path="/announcements" exact component={Announcements} />
                  <Route path="/user" exact component={User} />
                  <Route path="/instructors" exact component={Instructors} />
                </Switch>
              </div>
            </Router>

          </div>
          <button onClick={() => themeToggler()}>Change Theme</button>
        </StyledApp>
      </ThemeProvider>

  );
}

export default App;
