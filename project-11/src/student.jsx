import React from "react";

function Student(props) {
    return (
    <div className="student">
        <h2>{props.name}</h2>
        <h2>Age: {props.age}</h2>
    </div>
    );
}

export default Student;