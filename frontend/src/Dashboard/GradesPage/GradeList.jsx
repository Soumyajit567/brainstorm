const GradeList = ({grades, newGrade, setNewGrade}) => {

    /*
        //deletes courses from database
        const deleteCourse= (e) => {
            fetch('http://localhost:8000/grades/' + e, {
                method: 'DELETE'
            }).then(() => {
                setNewGrade(!newGrade)
                console.log("deleted a course")
            })
        }
*/
    //returns each course object
    return (
        <div className="course-list">
            {grades.map((grade) => (
                <div className={"course-preview"} key={grade.id}>
                    <h2 className={"courseTitle"}>{ grade.title }</h2>
                    <h3 className={"courseNumber"}>{ grade.courseNum }</h3>
                    <div className={"courseContent"}>{ grade.userGrade }</div>
                    <div className={"courseContent"}>{ grade.totalGrade }</div>
                    <p className={"createdBy"}>Created by Course Instructor {grade.prof}</p>
                    <button className={"deleteCourse"} onClick={() => (deleteCourse(grade.id))}> Delete Course </button>
                </div>
            ))}
        </div>
    );
}

export default GradeList;