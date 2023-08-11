import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [{
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
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
