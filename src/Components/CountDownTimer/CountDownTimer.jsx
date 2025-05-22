import "./CountDownTimer.css"
import InputCounter from "../InputCpunter/InputCounter";
import Play from "../Buttons/PlauButton/Play";
import Pause from "../Buttons/PauseButton/Pause";
import { useState } from "react";
import Reset from "../Buttons/ResetButton/reset";
function CountDownTimer() {
    const [isPlayed, setIsPlayed] = useState(false);
    const [reset, setReset] = useState(false);
    const handelPlayed = () => setIsPlayed(true);
    const handelPaused = () => setIsPlayed(false)
    const handelResert = () => {
        setReset(true);
        setIsPlayed(false);
        setTimeout(() => setReset(false), 100);
    };
    return <div className="CountDownTimer-container">
        <div className="title">
            <p>TimeDown</p>
        </div>
        <div className="content">
            <InputCounter played={isPlayed} reseted={reset}/>
        </div>
        <div className="incons">
            <Play onPlayed={handelPlayed} />
            <Pause onPaused={handelPaused} />
        </div>
        <div className="reset-icon">
            <Reset onReset={handelResert} />
        </div>
    </div>
}


export default CountDownTimer;