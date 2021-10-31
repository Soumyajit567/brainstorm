import CourseList from "../CoursesPage/CourseList";
function InstructorList({instrs, newInstr, setNewInstr}){
/*
    //deletes courses from database
    const deleteInstr= (e) => {
        fetch('http://localhost:8000/instrs/' + e, {
            method: 'DELETE'
        }).then(() => {
            setNewInstr(!newInstr)
            console.log("deleted an instructor")
        })
    }
*/
    //returns each course object
    return (
        <div className="instructor-list">
            {instrs.map((instr) => (
                <div className={"instr-preview"} key={instr.id}>
                    <h2 className={"instrTitle"}>{ instr.instrName }</h2>
                    <h3 className={"instrNum"}>{ instr.instrNum }</h3>
                    <div className={"instrContent"}>
                        {instr.content}
                    </div>
                    <p className={"createdBy"}>Created by Administrator {instr.prof}</p>
                    <button className={"deleteInstr"} /*onClick={() => (deleteInstr(instr.id))}*/> Delete Instructor </button>
                </div>
            ))}
        </div>
    );
}

export default InstructorList;