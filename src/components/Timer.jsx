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
        setWorking(true)
    }

    function ringBell() {
        const bellAudio = new Audio(bell);
        bellAudio.play();
    }

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
            }, 10);
        }
        if (!isTicking) {
            clearInterval(countdown)
        }
        return () => clearInterval(countdown);
    }, [props, isTicking, isWorking, timerSecond])

        return (
            <div>
                <div className="timer-container">
                    <h3>{isWorking === true ? "Working" : "On a break"}</h3>
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


// Old class syntax (here for reference):

// class Timer extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             isWorking: true,
//             timerSecond: 0,
//             intervalID: 0
//         }

//         this.start = this.start.bind(this);
//         this.pause = this.pause.bind(this);
//         this.reset = this.reset.bind(this);
        
//         this.decreaseTime = this.decreaseTime.bind(this);

//     }

//     start() {
//         let intervalID = setInterval(this.decreaseTime, 1000);
//         this.props.handleWhetherSelectorsShouldAppear(false);



//         this.setState({
//             intervalID: intervalID
//         })
//     }

//     pause() {
//         clearInterval(this.state.intervalID);
//     }

//     reset() {
//         this.pause();
//         this.props.resetTimerMinute();
//         this.props.handleWhetherSelectorsShouldAppear(true);
//         this.setState({
//             timerSecond: 0,
//             isWorking: true
//         })
//     }

//     decreaseTime() {
//         switch(this.state.timerSecond) {
//             case 0:
//                 if (this.props.timerMinute === 0) {
//                     if (this.state.isWorking) {
//                         this.setState({
//                             isWorking: false
//                         });
//                         this.props.toggleTimerSource(this.state.isWorking);
//                     } else {
//                         this.setState({
//                             isWorking: true
//                         });
//                         this.props.toggleTimerSource(this.state.isWorking);
//                     }
//                 } else {
//                     this.props.decrementTimerMinute();
//                     this.setState({
//                         timerSecond: 59
//                     })
//                 }
//                 break;
//             default:
//                 this.setState((prevState)=>{
//                     return {
//                     timerSecond: prevState.timerSecond - 1
//                 }
//                 })
//                 break;
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <div className="timer-container">
//                     <h3>{this.state.isWorking === true ? "Working" : "On a break"}</h3>
//                     <span className="timer-display">{this.props.timerMinute}</span>
//                     <span className="timer-display">:</span>
//                     <span className="timer-display">{this.state.timerSecond === 0 
//                     ? "00" 
//                     : this.state.timerSecond < 10 
//                     ? "0" + this.state.timerSecond 
//                     : this.state.timerSecond}</span>
//                 </div>
//                 <div className="timer-controls">
//                     <button onClick={this.start}>Start</button>
//                     <button onClick={this.pause}>Pause</button>
//                     <button onClick={this.reset}>Reset</button>
//                 </div>
//             </div>
//         )
//     }
// }