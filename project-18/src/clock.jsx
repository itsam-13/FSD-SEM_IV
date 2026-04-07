import React, { useState, useEffect } from "react";

function Clock(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h2 style={{ color: props.color }}>Current Time: {time}</h2>
        </div>
    );
}

export default Clock;