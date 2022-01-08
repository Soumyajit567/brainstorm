import { useState, useEffect } from 'react';
import GradeList from "./GradeList";
import NewGrade from "./NewGrade";
import ShowTotalGrade from "./ShowTotalGrade"
const Grades = () => {

    const [grade, setGrade] = useState(0);
    const [newGrade, setNewGrade] = useState(false);
    const [totalGrade, setTotalGrade] = useState(0);


/*
    //fetches data on the first render
        useEffect(() => {
            console.log('use effect has occurred');
            fetch('http://localhost:8000/grades').then(response => {
                console.log("retrieved grades")
                return response.json();
            })
                .then((data) => {
                    console.log(data)
                    setGrade(data)
                })
                .then(() => {
                let total = 0
                for(let g in grade){
                    total += parseInt(grade[g].totalGrade)
                }
                console.log("update grades. total= " + total)

                setTotalGrade(total);
            })
        }, [newGrade]);

        const updateGradeValues = () => {

        };
*/
    return (

        //outputs courses
        <div className={"mainContent"}>
            <div>
                <NewGrade newGrade={newGrade} setNewGrade={setNewGrade}/>
                <h1> All Grades </h1>
            </div>
            {grade && <ShowTotalGrade allGrades={grade}
                                      newGrades={newGrade}
                                      setNewGrades={setNewGrade}
                                      courseGrade={totalGrade}
                                      setCourseGrade={setTotalGrade}/>
            }
            {grade && <GradeList grades={grade}
                                 newGrade={newGrade}
                                 setNewGrade={setNewGrade}
                                 courseGrade={totalGrade}/>
            }
        </div>
    );
}

export default Grades

/*
totalUserGrade={totalUserGrade}
totalCourseGrade={totalCourseGrade}
setTotalUserGrade={setTotalUserGrade}
setTotalCourseGrade={setTotalCourseGrade}

  //tells useEffect to rerender when a new course has been added
    const updateGradesList = () => {

        setNewGrade(true);
    };

*/
