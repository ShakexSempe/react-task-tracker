import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  // DELETE TASK FUNCTION
  // FILTER ARRAY TO SHOW ITEMS THAT DON'T.. 
  // ..HAVE THE SAME ID AS THE TASK BEING CLICKED ON
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No tasks to show')
      }
    </div>
  );
}

export default App;
