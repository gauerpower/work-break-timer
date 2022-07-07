import React from "react";
import "../App.css";
import BreakSelector from "./BreakSelector.jsx"
import WorkSelector from "./WorkSelector.jsx"
import Timer from "./Timer.jsx"
import "../App.css"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            workLength: 25,
            breakLength: 5,
            timerMinute: 25,
        }
    }
    render(){
        return (<div className="App">
        <h1>Work/Break Timer</h1>
        <div className="selector-area">
        <BreakSelector breakLength={this.state.breakLength}/>
        <WorkSelector workLength={this.state.workLength}/>
        </div>
        
        <Timer timerMinute={this.state.timerMinute}/>
    </div>)
    }
   
}

export default App;

