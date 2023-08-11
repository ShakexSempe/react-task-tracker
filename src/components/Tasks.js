import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Write Markup',
                day: 'Monday',
                reminder: true,
            },
            {
                id: 2,
                text: 'Stylesheets',
                day: 'Tuesday',
                reminder: true,
            },
            {
                id: 3,
                text: 'Add interactivity',
                day: 'Wednesday',
                reminder: false,
            },
        ]
    )
    
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
        )
}

export default Tasks
