import React from "react";

function BreakSelector(props) {
    return (
        <div className="selector">
            <h3>Select Break Length</h3>
            <div className="selector-button-area">
            <button>+</button>
            <p className="selected-interval">{props.breakLength}</p>
            <button>-</button>
            </div>
        </div>
    )

}


export default BreakSelector;