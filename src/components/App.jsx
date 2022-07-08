import React, {useState} from "react";
import "../App.css";
import BreakSelector from "./BreakSelector.jsx"
import WorkSelector from "./WorkSelector.jsx"
import Timer from "./Timer.jsx"
import "../App.css"

function App(){
    const [workLength, setWorkLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerMinute, setTimerMinute] = useState(25);
    const [selectorVisibility, setSelectorVisibility] = useState(true);
    // constructor(){
    //     super();
    //     this.state = {
    //         workLength: 25,
    //         breakLength: 5,
    //         timerMinute: 25,
    //         selectorsShouldAppear: true
    //     };

    //     this.increaseBreakLength = this.increaseBreakLength.bind(this);
    //     this.decreaseBreakLength = this.decreaseBreakLength.bind(this);
    //     this.increaseWorkLength = this.increaseWorkLength.bind(this);
    //     this.decreaseWorkLength = this.decreaseWorkLength.bind(this);
    //     this.decrementTimerMinute = this.decrementTimerMinute.bind(this);
    //     this.handleWhetherSelectorsShouldAppear = this.handleWhetherSelectorsShouldAppear.bind(this);
    //     this.resetTimerMinute = this.resetTimerMinute.bind(this);
    //     this.toggleTimerSource = this.toggleTimerSource.bind(this);
    // }


    function increaseBreakLength() {
        setBreakLength(breakLength + 1);
        // this.setState((prevState)=>{
        //     return{
        //         breakLength: prevState.breakLength + 1
        //     }
        // })
    }

    function decreaseBreakLength() {
        setBreakLength(breakLength - 1);
        // this.setState((prevState)=>{
        //     return {
        //         breakLength: prevState.breakLength - 1
        //     }
        // })
    }

    function increaseWorkLength() {
        setWorkLength(workLength + 1);
        setTimerMinute(timerMinute + 1);
        // this.setState((prevState)=> {
        //     return {
        //         workLength: prevState.workLength + 1,
        //         timerMinute: prevState.workLength + 1
        //     }
        // })
    }

    function decreaseWorkLength() {
        setWorkLength(workLength - 1);
        setTimerMinute(timerMinute - 1);
        // this.setState((prevState)=> {
        //     return {
        //         workLength: prevState.workLength - 1,
        //         timerMinute: prevState.workLength - 1
        //     }
        // })
    }

    function decrementTimerMinute() {
        setTimerMinute(timerMinute - 1);
        // this.setState((prevState) => {
        //     return {
        //         timerMinute: prevState.timerMinute - 1
        //     }
        // })
    }

    function resetTimerMinute() {
        setTimerMinute(workLength);
        // this.setState({
        //     timerMinute: this.state.workLength
        // })
    }


    function toggleTimerSource(isWorking) {
        if (isWorking) {
            setTimerMinute(workLength);
            // this.setState({
            //     timerMinute: this.state.workLength
            // })
        } else {
            setTimerMinute(breakLength);
            // this.setState({
            //     timerMinute: this.state.breakLength
            // })
        }
    }

    function handleWhetherSelectorsShouldAppear(status) {
        setSelectorVisibility(status)
        // this.setState({
        //     selectorsShouldAppear: status
        // })
    }


    
        return (<div className="App">
        <h1>Work/Break Timer</h1>
        <Timer timerMinute={timerMinute}
                breakLength={breakLength}
                decrementTimerMinute={decrementTimerMinute}
                toggleTimerSource={toggleTimerSource}
                resetTimerMinute={resetTimerMinute}
                handleWhetherSelectorsShouldAppear={handleWhetherSelectorsShouldAppear}
        />
       <div className="selector-area">
        <BreakSelector 
        breakLength={breakLength}
            increaseBreakLength={increaseBreakLength}
            decreaseBreakLength={decreaseBreakLength}
            selectorsShouldAppear={selectorVisibility}
        />
        <WorkSelector
        workLength={workLength}
            increaseWorkLength={increaseWorkLength}
            decreaseWorkLength={decreaseWorkLength}
            selectorsShouldAppear={selectorVisibility}
        />
        </div>
    </div>)
    
   
}

export default App;

