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
import NewCourse from "./NewCourse";

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

export default function advCourse() {
  const classes = useStyles();

  const [course, setCourse] = useState(null);
  const [newCourse, setNewCourse] = useState(false);
  const [showNewCourse, setShowNewCourse] = useState(true);

  const updateCourse = () => {
    setNewCourse(s => !s);
  };

  const displayNewCourse = () => {
    setShowNewCourse(s => !s)
  }

  //fetches data on the first render
  useEffect(() => {
    console.log("use effect has occurred");
    fetch("https://brainstormbackend.herokuapp.com/user/detailed-course/" + localStorage.getItem("3"))
      .then((response) => {
        console.log("retrieved courses");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCourse(data);
      });
  }, [newCourse]);

  const showCourse = (e) => {
    e.preventDefault
    console.log("use effect has occurred");
    fetch("https://brainstormbackend.herokuapp.com/user/detailed-course/" + localStorage.getItem("3") +"/" + e)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("individual course data = " + JSON.stringify(data));
          setCourse(data);
        });
  }

  const courseData =
    course && course.map((course) => [
        course.courseTitle,
        course.courseDescription,
        course.courseGrade.toString() + "%",
        course.coursePoints.toString()]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Course List</h4>
            <p className={classes.cardCategoryWhite}>
              Click on a course to see more details
            </p>
            <button onClick={() => {updateCourse()}}> All Courses</button>
            <button onClick={() => showCourse(4)} className={"createAnmt"}> Course 4 </button>
            <button onClick={() => showCourse(5)} className={"createAnmt"}> Course 5 </button>

          </CardHeader>
          <CardBody>
            {course && (
              <Table
                tableHeaderColor="primary"
                tableHead={["Title", "Description", "grade", "points"]}
                tableData={courseData}
              />
            )}
          </CardBody>
        </Card>
        <button onClick={() => displayNewCourse()}>
        New Course
      </button>
        {showNewCourse ? (
            console.log("newAnmt is hidden!")
        ) : (
            <NewCourse newCourse={newCourse} setNewCourse={setNewCourse} />
        )}
      </GridItem>
    </GridContainer>
  );
}
