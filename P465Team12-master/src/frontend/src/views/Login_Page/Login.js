import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";
import register from "../Registration_Page/Register";
import {Link} from "react-router-dom";
import * as path from "path";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function Login() {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // send the username and password to the server
    fetch(
        "https://brainstormbackend.herokuapp.com/user/logintest/" +
        username +
        "/" +
        password
    )

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
        console.log("Data = " + JSON.stringify(data))
        localStorage.setItem("1",data.username);
        localStorage.setItem("2", data.password);
        localStorage.setItem("3", data.user_id);
        console.log(localStorage.getItem("1") + "/" + localStorage.getItem("2") + "/" + localStorage.getItem("3"));
      });
    // set the state of the user
      fetch("https://brainstormbackend.herokuapp.com/user/detailed-course/" + localStorage.getItem("3"))
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            //const cIDs = data.map((d) => d.courseID)
            localStorage.setItem("4", data);
            console.log("use effect has occurred" + username +"/"+ password + "/" + localStorage.getItem("4"));
          });
    // store the user in localStorage
  };

  // if there's a user show the message below
  // const handleSubmit = () => {
  //   console.log(username.current.value, password.current.value);
  // };

  return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Login</h4>
              </CardHeader>

              <CardBody>

                <GridContainer>

                  <GridItem xs={12} sm={12} md={10}>
                    <label htmlFor="username">Username: </label>
                  </GridItem>
                  <GridItem xs={9} sm={9} md={10}>
                    <input
                        // labelText="Username"
                        // id="username"
                        // formControlProps={{
                        //   fullWidth: true,
                        // }}
                        type="text"
                        required
                        value={username}
                        placeholder="enter a username"
                        onChange={(e) => setUsername(e.target.value)}

                    />
                  </GridItem>


                  <GridItem xs={12} sm={12} md={10}>
                    <label htmlFor="password">Password: </label>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <input
                        // labelText="Password"
                        // id="password"
                        // formControlProps={{
                        //   fullWidth: true,
                        // }}
                        type="password"
                        required
                        value={password}
                        placeholder="enter a password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                  </GridItem>
                </GridContainer>
              </CardBody>

              <CardFooter color = "Danger" >
                <Button onClick={handleSubmit} color={"danger"}>Login</Button>

              </CardFooter>
              <CardFooter color = "Danger" >
              <button href="/register"> Register </button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}></GridItem>
        </GridContainer>
      </div>
  );
}