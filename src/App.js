import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "April, 19th at 12.00PM"
    },
    {
      id: 2,
      text: "Go get my letter of employment",
      day: "April, 19th at 12.00PM"
    },
    {
      id: 3,
      text: "Meeting at work",
      day: "April, 19th at 12.00PM"
    }
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
