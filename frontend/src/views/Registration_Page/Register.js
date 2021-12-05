import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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

export default function Register() {
  const classes = useStyles();
  // const [usernames, setUsernames] = useState("");
  // const [passwords, setPasswords] = useState("");
  // const [ids,setids] = useState("");
  // const handleSubmit = () => {
  // console.log("let's start storing users");
  // fetch("https://brainstormbackend.herokuapp.com/register").then((response) => {
  //     return response.json();
  //   })
  //       .then((data) => {
  //         // setUsernames(data);
  //         // usernames.toString(data)
  //         // setPasswords(data);
  //         // passwords.toString(data);
  //         setids(data);
  //         // localStorage.setUsername("username", data);
  //         // localStorage.setPassword("password", data);
  //         console.log(data);
  //       });
  // };
  // const [role, setRole] = useState("");
  // //
  // const handleChange = (role) => {
  //   setRole(role.target.value);
  // };
  // const handleChange = (e) => {
  //   setRole(e.target.value);
  // };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_Name] = useState('turd');
  const [last_name, setLast_Name] = useState('sandwich');
  const [email, setEmail] = useState('turdsandwich@poop.com');
  const [role, setRole] = useState('');

  const buttonSetRole = (e) => {
    console.log("we set our role as " + e)
    setRole(e)
  }

  const registerUser = (e) => {
    const user = {username, password, first_name, last_name, email, role};
    console.log("bruh trying to register")
    fetch('https://brainstormbackend.herokuapp.com/user/register', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
  }


  return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Register</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
                    <label>Username</label>
                  </GridItem>
                  <GridItem xs={9} sm={9} md={10}>
                    <input
                        labelText="Username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <label>Password</label>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <input
                        labelText="Password"
                        id="last-name"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </GridItem>

                </GridContainer>
              </CardBody>

              <CardFooter>
                  <label htmlFor="instructor">Instructor</label>
                  <button onClick={() => buttonSetRole("INSTRUCTOR")}> Instructor </button>

                  <label htmlFor="student">Student</label>
                  <button onClick={() => buttonSetRole("STUDENT")}> Student </button>
              </CardFooter>

              <CardFooter>
                <Button onClick={() => registerUser()} color={"danger"}>Register</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}></GridItem>
        </GridContainer>
      </div>
  );
}
