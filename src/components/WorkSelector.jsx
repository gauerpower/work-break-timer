import React from "react";

function WorkSelector(props) {
    function decreaseCounter() {
        if (props.workLength > 1) {
            props.decreaseWorkLength();

        } else {
            return;
        }
    }
    function increaseCounter() {
        if (props.workLength < 60) {
            props.increaseWorkLength();
        } else {
            return;
        }
    }

    return (
        <div 
        style={{display: props.selectorsShouldAppear ? null : "none"}}
        className="selector">
            <h3>Select Work Session Length</h3>
            <div className="selector-button-area">
                <button onClick={decreaseCounter}>-</button>
                <p className="selected-interval">{props.workLength}</p>
                <button onClick={increaseCounter}>+</button>
            </div>
        </div>
    )

}


export default WorkSelector;