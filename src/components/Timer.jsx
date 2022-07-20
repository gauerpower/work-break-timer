import React, {useState, useEffect} from "react";
import bell from "../bell.mp3"


function Timer(props) {
    const [isWorking, setWorking] = useState(true);
    const [timerSecond, setTimerSecond] = useState(0);
    const [isTicking, toggleTicking] = useState(false);
    
    function start() {
        toggleTicking(true);
        props.handleWhetherSelectorsShouldAppear(false)
    }

    function pause() {
        toggleTicking(false);
    }

    function reset() {
        pause();
        props.resetTimerMinute();
        props.handleWhetherSelectorsShouldAppear(true);
        setTimerSecond(0);
        setWorking(true);
    }

    function ringBell() {
        const bellAudio = new Audio(bell);
        bellAudio.play();
    }
    
    useEffect(()=> {
        let countdown;
        if (isTicking) {
            countdown = setInterval(()=> {
                const currentTimerSecond = timerSecond;
                const currentTimerMinute = props.timerMinute;
                const currentIsWorking = isWorking;
                if (currentTimerSecond !== 0) {
                    setTimerSecond(currentTimerSecond - 1);
                    return;
                }
                if (currentTimerSecond === 0 && currentTimerMinute !== 0) {
                    props.decrementTimerMinute();
                    setTimerSecond(59);
                    return;
                }
                if (currentTimerSecond === 0 && currentTimerMinute === 0){
                    if (currentIsWorking) {
                        props.increaseWorkSessionCount();
                    } else {
                        props.increaseBreakCount();
                    }
                    ringBell();
                    props.flash();
                    props.toggleTimerSource(!currentIsWorking);
                    setWorking(!currentIsWorking);
                    return;
                }
            }, 1000);
        }
        if (!isTicking) {
            clearInterval(countdown)
        }
        return () => clearInterval(countdown);
    }, [props, isTicking, isWorking, timerSecond])

        return (
            <div>
                <div className="timer-container">
                    <h2>{isWorking === true ? "Working" : "On a break"}</h2>
                    <span className="timer-display">{props.timerMinute}</span>
                    <span className="timer-display">:</span>
                    <span className="timer-display">{timerSecond === 0 ? "00" 
                    : timerSecond < 10 ? "0" + timerSecond : timerSecond}</span>
                </div>
                <div className="timer-controls">
                    <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        )
    
}

export default Timer;



// decreaseTime() function from when it was outside setTimeout
// (included here as a reference)

    // function decreaseTime() {
    //     const currentTimerSecond = timerSecond;
    //     const currentTimerMinute = props.timerMinute;
    //     const currentIsWorking = isWorking;
    //     if (currentTimerSecond !== 0) {
    //         setTimerSecond(currentTimerSecond - 1);
    //         return;
    //     }
    //     if (currentTimerSecond === 0 && currentTimerMinute !== 0) {
    //         props.decrementTimerMinute();
    //         setTimerSecond(59);
    //         return;
    //     }
    //     if (currentTimerSecond === 0 && currentTimerMinute === 0){
    //         if (currentIsWorking) {
    //             props.increaseWorkSessionCount();
    //         } else {
    //             props.increaseBreakCount();
    //         }
    //         ringBell();
    //         props.flash();
    //         props.toggleTimerSource(!currentIsWorking);
    //         setWorking(!currentIsWorking);
    //         return;
    //     }
    // }