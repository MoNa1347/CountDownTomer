import "./InputCounter.css"
import Increase from "../Buttons/IncreaseButton/Increase";
import Decrease from "../Buttons/DecreaseButton/Decrease";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
function InputCounter({played, reseted}) {
    const [time, setTime] = useState({
        hour: 0,
        mint: 0,
        sec: 0
    });
    
    function handelClick () {
        setTime(prev => ({ ...prev, hour: prev.hour + 1 }));
    }
    
    function handelMintClick() {
        time.mint === 59 && setTime(prev => ({ ...prev, mint: 0, hour: prev.hour + 1 }));
        time.mint < 59 && setTime(prev => ({ ...prev, mint: prev.mint + 1 }));
    }
    
    function handelSecondClick() {
        time.sec === 59 && time.mint === 59 && setTime(prev => ({ ...prev, sec: 0, mint: 0, hour: prev.hour + 1 }));
        time.sec === 59 && time.mint < 59 && setTime(prev => ({ ...prev, sec: 0, mint: prev.mint + 1 }));
        time.sec < 59 && setTime(prev => ({ ...prev, sec: prev.sec + 1 }));
    }
    
    function handelDownHourClick() {
        time.hour > 0 && setTime(prev => ({ ...prev, hour: prev.hour - 1 }));
    }
    
    function handelDownMintClick() {
        time.mint > 0 && setTime(prev => ({ ...prev, mint: prev.mint - 1 }));
        time.hour > 0 && time.mint === 0 && setTime(prev => ({ ...prev, mint: 59, hour: prev.hour - 1 }));
    }
    
    function handelDownSecondClick() {
        time.sec > 0 && setTime(prev => ({ ...prev, sec: prev.sec - 1 }));
        time.mint > 0 && time.sec === 0 && setTime(prev => ({ ...prev, sec: 59, mint: prev.mint - 1 }));
        time.hour > 0 && time.sec === 0 && time.mint === 0 && setTime(prev => ({ ...prev, sec: 59, mint: 59, hour: prev.hour - 1 }));
    }
    
    useEffect(() => {
        let id;
        if (played) {
            id = setInterval(() => {
                setTime(prevTime => {
                    let {hour, mint, sec} = prevTime;
                    if (sec > 0) {
                        sec--;
                    } else {
                        if (mint > 0) {
                            mint--;
                            sec = 59;
                        } else {
                            if (hour > 0) {
                                hour--;
                                mint = 59;
                                sec = 59;
                            } else {
                                clearInterval(id);
                            }
                        }
                    }
                    return {hour, mint , sec};
                });
            }, 1000);
        }
    
        return () => clearInterval(id);
    }, [played]);
    useEffect(() => {
        (reseted) && setTime({hour:0, mint:0, sec:0});
    },[reseted])
    console.log(played)
    
    return <div className="InputCounter-container">
        <div className="sec-timer">
            <button onClick={handelClick} style={{cursor:'pointer'}}>
                <FontAwesomeIcon className="icons" icon={faCaretUp} />
            </button>
            <div className="container">
                <p>{(time.hour <= 9)? `0${time.hour}` : `${time.hour}`}</p>
                <label htmlFor="">:</label>
            </div>
            <button onClick={handelDownHourClick} style={{cursor:'pointer'}}>
                <FontAwesomeIcon className="icons" icon={faCaretDown} />
            </button>
        </div>
        <div className="mint-timer">
            <button onClick={handelMintClick} style={{cursor:'pointer'}}>
                <FontAwesomeIcon className="icons" icon={faCaretUp} />
            </button>
            <div className="container">
                <p>{(time.mint <= 9)? `0${time.mint}` : `${time.mint}`}</p>
                <label htmlFor="">:</label>
            </div>
            <button onClick={handelDownMintClick} style={{cursor:'pointer'}}>
                <FontAwesomeIcon className="icons" icon={faCaretDown} />
            </button>
        </div>
        <div className="hour-timer">
            <button onClick={handelSecondClick} style={{cursor:'pointer'}}>
                <FontAwesomeIcon className="icons" icon={faCaretUp} />
            </button>
            <div className="container">
                <p>{(time.sec <= 9)? `0${time.sec}` : `${time.sec}`}</p>
            </div>
            <button onClick={handelDownSecondClick} style={{cursor:'pointer'}}>
                <FontAwesomeIcon className="icons" icon={faCaretDown} />
            </button>
        </div>
    </div>
}


export default InputCounter;