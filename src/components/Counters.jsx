import React from "react";

function Counters(props) {
    const sessionsText = props.workSessionCount === 1 ? "session" : "sessions";
    const breaksText = props.breakCount === 1 ? "break" : "breaks";


    return(
        <div className="counter-container"
        style={{display: props.countersShouldAppear ? "block" : "none"}}
        >
            <h3>You have completed {props.workSessionCount} work {sessionsText}.</h3>
            <h3>You have taken {props.breakCount} {breaksText}.</h3>
        </div>
    )
}



export default Counters;