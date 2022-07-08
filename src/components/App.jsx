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
            selectorsShouldAppear: true
        };

        this.increaseBreakLength = this.increaseBreakLength.bind(this);
        this.decreaseBreakLength = this.decreaseBreakLength.bind(this);
        this.increaseWorkLength = this.increaseWorkLength.bind(this);
        this.decreaseWorkLength = this.decreaseWorkLength.bind(this);
        this.decrementTimerMinute = this.decrementTimerMinute.bind(this);
        this.handleWhetherSelectorsShouldAppear = this.handleWhetherSelectorsShouldAppear.bind(this);
        this.resetTimerMinute = this.resetTimerMinute.bind(this);
        this.toggleTimerSource = this.toggleTimerSource.bind(this);





    }

    increaseBreakLength() {
        this.setState((prevState)=>{
            return{
                breakLength: prevState.breakLength + 1
            }
        })
    }

    decreaseBreakLength() {
        this.setState((prevState)=>{
            return {
                breakLength: prevState.breakLength - 1
            }
        })
    }

    increaseWorkLength() {
        this.setState((prevState)=> {
            return {
                workLength: prevState.workLength + 1,
                timerMinute: prevState.workLength + 1
            }
        })
    }

    decreaseWorkLength() {
        this.setState((prevState)=> {
            return {
                workLength: prevState.workLength - 1,
                timerMinute: prevState.workLength - 1
            }
        })
    }

    decrementTimerMinute() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1
            }
        })
    }

    resetTimerMinute() {
        this.setState({
            timerMinute: this.state.workLength
        })
    }


    toggleTimerSource(isWorking) {
        if (isWorking) {
            this.setState({
                timerMinute: this.state.workLength
            })
        } else {
            this.setState({
                timerMinute: this.state.breakLength
            })
        }
    }

    handleWhetherSelectorsShouldAppear(status) {
        this.setState({
            selectorsShouldAppear: status
        })
    }


    render(){
        return (<div className="App">
        <h1>Work/Break Timer</h1>
        <Timer timerMinute={this.state.timerMinute}
                breakLength={this.state.breakLength}
                decrementTimerMinute={this.decrementTimerMinute}
                toggleTimerSource={this.toggleTimerSource}
                resetTimerMinute={this.resetTimerMinute}
                handleWhetherSelectorsShouldAppear={this.handleWhetherSelectorsShouldAppear}
        />
       <div className="selector-area">
        <BreakSelector 
        breakLength={this.state.breakLength}
            increaseBreakLength={this.increaseBreakLength}
            decreaseBreakLength={this.decreaseBreakLength}
            selectorsShouldAppear={this.state.selectorsShouldAppear}
        />
        <WorkSelector
        workLength={this.state.workLength}
            increaseWorkLength={this.increaseWorkLength}
            decreaseWorkLength={this.decreaseWorkLength}
            selectorsShouldAppear={this.state.selectorsShouldAppear}
        />
        </div>
    </div>)
    }
   
}

export default App;

