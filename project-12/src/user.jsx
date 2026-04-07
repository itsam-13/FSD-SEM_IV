function User (props) {
    return(
        <div>
            <h2>{props.data.name}</h2>
            <h2>{props.data.city}</h2>

            <h4>Skills:</h4>
            <ul>
                {props.data.skill.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default User