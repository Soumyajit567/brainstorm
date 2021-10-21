
const UserList = ({users, newUser, setNewUser}) => {

    const deleteUser= (e) => {
        fetch('http://localhost:8000/users' + e, {
            method: 'DELETE'
        }).then(() => {
            setNewUser(!newUser)
            console.log("deleted a user")
        })
    }

    return (
        <div className="course-list">
            {users.map((users) => (
                <div className={"course-preview"} key={users.id}>
                    <h2 className={"courseTitle"}>{ users.username }</h2>
                    <h3 className={"courseNumber"}>{ users.emailAddress }</h3>
                    <div className={"courseContent"}>
                        {users.content}
                    </div>
                    <button className={"deleteUser"} onClick={() => (deleteUser(users.id))}> Delete User </button>
                </div>
            ))}
        </div>
    );
}

export default UserList;