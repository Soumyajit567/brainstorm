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
  const [role, setRole] = useState("INSTRUCTOR");



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
                  <label htmlFor="username">Username: </label>
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
                <GridItem xs={12} sm={12} md={6}>
                  <label htmlFor="password">password: </label>
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

            <CardFooter>
              <form>
                <label htmlFor="instructor">Instructor</label>

                <input
                    type="radio"
                    value="instructor"
                    id="instructor"
                    // onChange={handleChange}
                    name="role"

                />

                <label htmlFor="student">Student</label>
                <input
                    type="radio"
                    value="student"
                    id="student"
                    // onChange={handleChange}
                    name="role"
                />


              </form>
            </CardFooter>

            <CardFooter>
              <Button onClick={registerUser} color="danger">Register</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}></GridItem>
      </GridContainer>
    </div>
  );
}
