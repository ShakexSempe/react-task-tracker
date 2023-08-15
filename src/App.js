import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  // TASKS ARRAY
  // TASK STATE AT THE TOP LEVEL TO ALLOW ALL COMPONENTS ACCESS
  const [tasks, setTasks] = useState(
    [{
        id: 1,
        text: 'HTML-5 Markup',
        day: 'Monday',
        reminder: true,
      },
      {
        id: 2,
        text: 'Sass Stylesheets',
        day: 'Tuesday',
        reminder: true,
      },
      {
        id: 3,
        text: 'Javascript..Scripts',
        day: 'Wednesday',
        reminder: false,
      },
    ]
  )

  // ADD TASK FUNCTION 
  const addTask = (task) => {
    console.log(task);

  }

  // DELETE TASK FUNCTION
  // FILTER ARRAY TO SHOW ITEMS THAT DON'T.. 
  // ..HAVE THE SAME ID AS THE TASK BEING CLICKED ON
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TOGGLE REMINDER FUNCTION
  // CHANGE REMINDER BOOLEAN ON DOUBLE CLICK
  // MAP - TASK - WHERE TASK = ID PASSED IN THEN WE HAVE SPECIFIC OBJECT ELSE TAKE AS IS WITH NO CHANGE
  const toggleReminder = (id) => {
    // WE ONLY CHANGE THE TASK PASSED IN ()
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks to show')
      }
    </div>
  );
}

export default App;
