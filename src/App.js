import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "April, 19th at 12.00PM",
      reminder: true
    },
    {
      id: 2,
      text: "Go get my letter of employment",
      day: "April, 19th at 12.00PM",
      reminder: true
    },
    {
      id: 3,
      text: "Meeting at work",
      day: "April, 19th at 12.00PM",
      reminder: true
    }
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  //toggleRemind for task
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    //   if(task.id === id){
    //     task.reminder = !task.reminder;
    //   }
    // }))
  }
  

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks left"}
    </div>
  );
}

export default App;
