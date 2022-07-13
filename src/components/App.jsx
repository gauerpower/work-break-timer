import React, {useState} from "react";
import "../App.css";
import BreakSelector from "./BreakSelector.jsx"
import WorkSelector from "./WorkSelector.jsx"
import Timer from "./Timer.jsx"
import Counters from "./Counters.jsx"
import "../App.css"

function App(){
    const [workLength, setWorkLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerMinute, setTimerMinute] = useState(25);
    const [selectorVisibility, setSelectorVisibility] = useState(true);
    const [workSessionCount, setWorkSessionCount] = useState(0);
    const [breakCount, setBreakCount] = useState(0);
    const [timeToFlash, setFlash] = useState(false);
    

    function increaseBreakLength() {
        setBreakLength(breakLength + 1);
    }

    function decreaseBreakLength() {
        setBreakLength(breakLength - 1);
    }

    function increaseWorkLength() {
        setWorkLength(workLength + 1);
        setTimerMinute(timerMinute + 1);
    }

    function decreaseWorkLength() {
        setWorkLength(workLength - 1);
        setTimerMinute(timerMinute - 1);
    }

    function decrementTimerMinute() {
        setTimerMinute(timerMinute - 1);
    }

    function resetTimerMinute() {
        setTimerMinute(workLength);
        setBreakCount(0);
        setWorkSessionCount(0);
    }

    function toggleTimerSource(isWorking) {
        if (isWorking) {
            setTimerMinute(workLength);
        } else {
            setTimerMinute(breakLength);
        }
    }

    function handleWhetherSelectorsShouldAppear(status) {
        setSelectorVisibility(status);
    }

    function increaseWorkSessionCount(){
        setWorkSessionCount(workSessionCount + 1);
    }

    function increaseBreakCount() {
        setBreakCount(breakCount + 1);
    }

    function flash() {
        setFlash(true);
        setTimeout(()=>{setFlash(false)}, 2000);
    }

    return (
    <div className="App"
    style={{
  backgroundColor: timeToFlash ? "#D52A8D" : null,
  transition: "all 1s ease",
  WebkitTransition: "all 1s ease",
  MozTransition: "all 1s ease"
}}>
        <h1>Work/Break Timer</h1>
        <Timer timerMinute={timerMinute}
                breakLength={breakLength}
                decrementTimerMinute={decrementTimerMinute}
                toggleTimerSource={toggleTimerSource}
                resetTimerMinute={resetTimerMinute}
                handleWhetherSelectorsShouldAppear={handleWhetherSelectorsShouldAppear}
                increaseWorkSessionCount={increaseWorkSessionCount}
                increaseBreakCount={increaseBreakCount}
                flash={flash}
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
        <Counters 
            countersShouldAppear={!selectorVisibility}
            workSessionCount={workSessionCount}
            breakCount={breakCount}
        />
    </div>)
}

export default App;

