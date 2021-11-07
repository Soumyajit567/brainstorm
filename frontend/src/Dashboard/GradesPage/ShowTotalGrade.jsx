import {useEffect} from "react";
const ShowTotalGrade = (props) => {

    return (
        console.log(props.totalGrade + "props total grade"),

        console.log(typeof(props.allGrades)),

        <div>
            Here is your total Grade: {props.courseGrade}
        </div>
    );
}

export default ShowTotalGrade;