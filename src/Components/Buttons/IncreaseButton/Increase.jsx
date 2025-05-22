// import Pause from '../PauseButton/Pause';
import './Increase.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import InputCounter from '../../InputCpunter/InputCounter';
function Increase () {
    
    return <div>
        <button  style={{cursor:'pointer'}}>
        <FontAwesomeIcon icon={faCaretUp} />
        </button>
    </div>
    
}

export default Increase;