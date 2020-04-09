import React, { useState } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000)

    return (
        <h4>{time}</h4>
    )
}

export default Clock;