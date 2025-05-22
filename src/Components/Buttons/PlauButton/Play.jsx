import './Play.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import InputCounter from '../../InputCpunter/InputCounter';
function Play ({onPlayed}) {
    return <div className="btn">
        <button onClick={onPlayed}>
        <FontAwesomeIcon 
                icon={faPlay} 
                style={{cursor:'pointer'}} 
                className="icons"/>
        </button>
        
    </div>
}

export default Play;