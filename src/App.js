import { useState } from 'react';
import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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
  }

  //Add Tasks
  const addTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
    

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTasks}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks left"}
    </div>
  );
}

export default App;
