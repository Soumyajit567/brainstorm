const AnmtList = (props) => {

    const anmts = props.anmts;

    return (
        <div className="anmt-list">
            <h1> All Announcements </h1>
            {anmts.map((anmt) => (
                <div className={"anmt-preview"} key={anmt.id}>
                    <h2>{ anmt.title }</h2>
                    <p>Written by {anmt.author}</p>
                    <button> onClick=(() => removeAnmt(set} Remove Announcement</button>
                </div>
            ))}
        </div>
    );
}

export default AnmtList;