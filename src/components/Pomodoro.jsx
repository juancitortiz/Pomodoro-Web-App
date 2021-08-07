import { Fragment, useState, useEffect } from "react";

export default function Pomodoro() {
    
    const [ workingSessionMin, setWorkingSessionMin ] = useState(1)
    const [ workingSessionSeg, setWorkingSessionSeg ] = useState(0)
    const [ breakSessionMin, setBreakSessionMin ] = useState(5)
    const [ breakSessionSeg, setBreakSessionSeg ] = useState(0)
    const [ isPaused, setIsPaused ] = useState(true)


    useEffect(() => {
        if(!isPaused){
            setTimeout(decreaseValue, 1000)
        }
    })

    function handleStartPause() {
        if(isPaused){
            console.log("start")
            setIsPaused(false)            
            return
        }
        else {
            console.log("pause")
            setIsPaused(true)
            return
        }
    }

    function decreaseValue() {
        if(workingSessionMin >= 0 && workingSessionSeg >= 0) { 
            handleWorkingSession();
        } else{
            if(breakSessionMin >= 0 && breakSessionSeg >= 0)
                handleBreakSession();
        }
    }
    
    function handleWorkingSession() {
        if(workingSessionMin > 0 && workingSessionSeg === 0){
            setWorkingSessionMin(workingSessionMin - 1)
            setWorkingSessionSeg(59)
        }
        else{
            setWorkingSessionSeg(workingSessionSeg - 1)
        }
    }

    function handleBreakSession() {
        if(breakSessionMin > 0 && breakSessionSeg === 0){
            setBreakSessionMin(breakSessionMin - 1)
            setBreakSessionSeg(59)
        }
        else{
            setBreakSessionSeg(breakSessionSeg - 1)
        }
    }
    
    function reset() {
        console.log("reset")
        setIsPaused(true)
        setWorkingSessionMin(25)
        setWorkingSessionSeg(0)
        setBreakSessionMin(5)
        setBreakSessionSeg(0)
    }

    function showWorkingSession() {
        let minutes = workingSessionMin < 10 ? "0" + workingSessionMin : workingSessionMin;
        let seconds = workingSessionSeg < 10 ? "0" + workingSessionSeg : workingSessionSeg;
        return minutes + ":" + seconds;
    }

    function showBreakSession() {
        let minutes = breakSessionMin < 10 ? "0" + breakSessionMin : breakSessionMin;
        let seconds = breakSessionSeg < 10 ? "0" + breakSessionSeg : breakSessionSeg;
        return minutes + ":" + seconds;
    }

    return(
        <>
            <div>
                <div>
                    <p>{showWorkingSession()} |  
                       {showBreakSession()}</p>
                </div>
                <hr />
                <div>
                    <button onClick={handleStartPause}>Start/Pause</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}