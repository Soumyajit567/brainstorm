const AnmtList = ({announcements}) => {
/*
    const deleteAnmt= () => {
        fetch('http://localhost:8000/anmts', + announcements.id)
    }
*/
    return (
        <div className="anmt-list">
            {announcements.map((anmts) => (
                <div className={"anmt-preview"} key={anmts.id}>
                    <h2>{ anmts.title }</h2>
                    <div>
                        {anmts.content}
                    </div>
                    <p>Written by {anmts.author}</p>
                    <button > Delete Announcement </button>
                </div>
            ))}
        </div>
    );
}

export default AnmtList;