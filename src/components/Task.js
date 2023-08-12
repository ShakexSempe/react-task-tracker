// IMPORT AND USE ICONS AS REACT COMPONENT VIA REACT-ICONS
// REACT-ICONS/FA = FONT-AWESOME ICONS LIBRARY
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>
                {task.text} <FaTimes style={{ 
                    color: 'red', cursor: 'pointer' }} /> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
