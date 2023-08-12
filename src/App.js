import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // TASKS ARRAY
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
