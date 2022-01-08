import {useState} from "react";

const AgList = ({assignments, newAg, setNewAg}) => {
    // const [answer, setanswer] = useState('');
    // const [title, settitle] = useState('');
    // const [description,]
    //deletes the announcement from the database.json
    // const deleteAg= (e) => {
    //     fetch('https://brainstormbackend.herokuapp.com/anmts/' + e, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         setNewAg(!newAg)
    //         console.log("deleted an announcement")
    //     })
    // }

    //returns the announcement lists
    return (
        <div className="ag-list">
            {assignments.map((ag) => (
                <div className={"ag-preview"} key={ag.id}>heroku logs --tail
                    <h2 className={"agTitle"}>{ ag.title }</h2>
                    <div className={"agDescription"}>
                        {ag.description}
                    </div>
                    {/*<p className={"writtenBy"}>Written by {ag.author}</p>*/}
                    {/*<label className={"agInput"}> Assignment Content: </label>*/}
                    {/*<textarea*/}
                    {/*    // value={answer}*/}
                    {/*    // onChange={(e) => setanswer(e.target.value)}*/}
                    {/*/>*/}
                    <button> Submit </button>
                </div>
            ))}
        </div>
    );
}

export default AgList;