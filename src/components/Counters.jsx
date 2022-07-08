import React from "react";

function Counters(props) {
    return(
        <div className="counter-container"
        style={{display: props.countersShouldAppear ? "block" : "none"}}
        >
            <h3>You have completed {props.workSessionCount} work sessions.</h3>
            <h3>You have taken {props.breakCount} breaks.</h3>
        </div>
    )
}



export default Counters;