const AnmtList = ({announcements, newAnmt, setNewAnmt}) => {



    const deleteAnmt= (e) => {
        fetch('http://localhost:8000/anmts/' + e, {
            method: 'DELETE'
        }).then(() => {
            setNewAnmt(!newAnmt)
            console.log("deleted an announcement")
        })
    }

    return (
        <div className="anmt-list">
            {announcements.map((anmts) => (
                <div className={"anmt-preview"} key={anmts.id}>
                    <h2>{ anmts.title }</h2>
                    <div>
                        {anmts.content}
                    </div>
                    <p>Written by {anmts.author}</p>
                    <button onClick={() => (deleteAnmt(anmts.id))}> Delete Announcement </button>
                </div>
            ))}
        </div>
    );
}

export default AnmtList;