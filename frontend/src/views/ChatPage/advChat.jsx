import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import NewMsg from "./NewMsg";

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

export default function advChat() {
    const classes = useStyles();
    const [msg, setMsg] = useState(null);
    const [newMsg, setNewMsg] = useState(false);
    const updateAnmts = () => {
        setNewMsg(true);
    };

    //fetches data on the first render
    useEffect(() => {
        console.log("use effect has occurred");
        fetch("https://brainstormbackend.herokuapp.com/course/msgs/4")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setMsg(data);
            });
    });

    const msgData =
        msg && msg.map((msgs) => [msgs.text, msgs.username]);

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                {msg && (
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Announcement List</h4>
                            <p className={classes.cardCategoryWhite}>
                                Click on an Announcement to see more details
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["Text", "Username"]}
                                tableData={msgData}
                            />
                        </CardBody>
                    </Card>
                )}
                <NewMsg newMsg={newMsg} setNewMsg={setNewMsg} />
            </GridItem>
        </GridContainer>
    );
}

/*
"https:brainstormbackend.herokuapp.com/course/anmt/5
 */
