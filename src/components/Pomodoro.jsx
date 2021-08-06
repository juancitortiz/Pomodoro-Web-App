import { Fragment, useState, useEffect } from "react";

export default function Pomodoro() {
    
    const [ workingSession, setWorkingSession ] = useState(25)
    const [ breakSession, setBreakSession ] = useState(5)
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
        if(workingSession > 0) { 
            setWorkingSession(workingSession - 0.01)
        } else{
            if(breakSession > 0)
                setBreakSession(breakSession - 0.01)
        }
    }

    function reset() {
        console.log("reset")
        setWorkingSession(25)
        setBreakSession(5)
        setIsPaused(true)
    }

    return(
        <>
            <div>
                <div>
                    <p>{workingSession} - {breakSession}</p>
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