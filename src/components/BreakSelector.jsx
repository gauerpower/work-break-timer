import React from "react";

function BreakSelector(props) {
    function decreaseCounter() {
        if (props.breakLength > 1) {
            props.decreaseBreakLength();

        } else {
            return;
        }
    }
    function increaseCounter() {
        if (props.breakLength <= 60) {
            props.increaseBreakLength();
        } else {
            return;
        }
    }

// Note to self: Visibility leaves elements in place. Display removes them from HTML flow.
    return (
        <div style={{visibility: props.selectorsShouldAppear ? "visible" : "hidden"}} className="selector">
            <h3>Select Break Length</h3>
            <div className="selector-button-area">
                <button onClick={decreaseCounter}>-</button>
                <p className="selected-interval">{props.breakLength}</p>
                <button onClick={(increaseCounter)}>+</button>
            </div>
        </div>
    )

}


export default BreakSelector;