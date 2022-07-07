import React from "react";

function WorkSelector(props) {
    return (
        <div className="selector">
            <h3>Select Work Session Length</h3>
            <div className="selector-button-area">
            <button>+</button>
            <p className="selected-interval">{props.workLength}</p>
            <button>-</button>
            </div>
        </div>
    )

}


export default WorkSelector;