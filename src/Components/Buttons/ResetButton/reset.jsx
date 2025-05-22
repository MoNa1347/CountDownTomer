import './reset.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

function Reset ({onReset}) {
    
    return <div className="btn">
        <button onClick={onReset} style={{cursor:'pointer'}}>
            <FontAwesomeIcon 
            icon={faRotateRight} 
            className="icons"/>
        </button>
        
    </div>
    
}

export default Reset;