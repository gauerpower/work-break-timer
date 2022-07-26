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

    return (
        <div 
        style={{display: props.selectorsShouldAppear ? null : "none"}} 
        className="selector">
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