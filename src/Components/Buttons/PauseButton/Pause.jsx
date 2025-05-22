import './Pause.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Play from '../PlauButton/Play';

function Pause ({onPaused}) {
    
    return <div className="btn">
        <button onClick={onPaused}>
        <FontAwesomeIcon 
                icon={faPause} 
                style={{cursor:'pointer'}} 
                className="icons" />
        </button>
        
    </div>
    
}

export default Pause;