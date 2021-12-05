import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import ATable from "components/Table/ATable"
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import NewAg from "./NewAg";
const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

const useStyles = makeStyles(styles);

export default function AdvAg() {
    const classes = useStyles();
    const [ag, setAg] = useState(null);
    const [newAg, setNewAg] = useState(false);
    const [showNewAg, setShowNewAg] = useState(true);

    const updateAg = () => {
        setNewAg(s => !s);
    };

    const displayNewAg = () => {
        setShowNewAg(s => !s)
    }

    //fetches data on the first render
    useEffect(() => {
        console.log("use effect has occurred");
        fetch("https://brainstormbackend.herokuapp.com/asgmt/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setAg(data);
            });
    }, [newAg]);

    const showAg = (e) => {
        console.log("use effect has occurred");
        fetch("https://brainstormbackend.herokuapp.com/course/asgmts/" + e)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setAg(data);
            });
    }

    const agData = ag && ag.map((ags) => [ags.title, ags.description]);



    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                {ag && (
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Assignments List</h4>
                            <p className={classes.cardCategoryWhite}>
                                Click on an Announcement to see more details
                            </p>
                            <button onClick={() => updateAg()} className={"createAg"}> All Courses </button>
                            <button onClick={() => showAg(4)} className={"createAg"}> Course 4 </button>
                            <button onClick={() => showAg(5)} className={"createAg"}> Course 5 </button>

                        </CardHeader>
                        <CardBody>
                            <ATable
                                tableHeaderColor="primary"
                                tableHead={["Title", "Content"]}
                                tableData={agData}

                            />
                            <label htmlFor="username">Enter Assignment Number: </label>
                            <input
                                type="text"
                                required
                                placeholder="Enter Homework Number"
                            />
                            <label>Write Answer : </label>
                            <input type="textarea"
                                   name="textValue"
                            />
                            <button> Submit </button>
                        </CardBody>
                    </Card>
                )}
                <button onClick={() => displayNewAg()}>
                    New Assignment
                </button>
                {showNewAg ? (
                    console.log("newAg is hidden!")
                ) : (
                    <NewAg newAg={newAg} setNewAg={setNewAg} />
                )}
            </GridItem>
        </GridContainer>
    );
}

/*
"https:brainstormbackend.herokuapp.com/course/anmt/5
 */
