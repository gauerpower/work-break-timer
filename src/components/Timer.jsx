import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isWorking: true,
            timerSecond: 0
        }
    }


    render() {
        return (
            <div>
                <div className="timer-container">
                    <h3>{this.state.isWorking === true ? "Working" : "On a break"}</h3>
                    <span className="timer-display">{this.props.timerMinute}</span>
                    <span className="timer-display">:</span>
                    <span className="timer-display">{this.state.timerSecond === 0 
                    ? "00" 
                    : this.state.timerSecond < 10 
                    ? "0" + this.state.timerSecond 
                    : this.state.timerSecond}</span>
                </div>
                <div className="timer-controls">
                    <button>Start</button>
                    <button>Pause</button>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}

export default Timer;