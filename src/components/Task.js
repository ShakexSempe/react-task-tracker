// IMPORT AND USE ICONS AS REACT COMPONENT VIA REACT-ICONS
// REACT-ICONS/FA = FONT-AWESOME ICONS LIBRARY
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // TEMPLATE LITERAL IF REMINDER = TRUE THEN CLASS = .REMINDER ELSE NO CLASS
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes style={{ 
                    color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} /> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
