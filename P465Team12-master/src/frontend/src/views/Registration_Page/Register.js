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



  const [first_name, setFirst_Name] = useState('first');
  const [last_name, setLast_Name] = useState('last');
  const [email, setEmail] = useState('email@email.com');
  const [role, setRole] = useState('');



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
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Password"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                    />
                  </GridItem>

                </GridContainer>
              </CardBody>

              <CardFooter>
                <form>
                  <label htmlFor="instructor">Instructor</label>

                  <input

                      type="text"
                      required
                      value={username}
                      placeholder="enter a username"
                      onChange={(e) => setUsername(e.target.value)}
                  />

                  <label htmlFor="student">Student</label>
                  <input

                      type="password"
                      required
                      value={password}
                      placeholder="enter a password"
                      onChange={(e) => setPassword(e.target.value)}
                  />


                </form>
              </CardFooter>

              <CardFooter>
                <Button color={"danger"}>Register</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}></GridItem>
        </GridContainer>
      </div>
  );
}
