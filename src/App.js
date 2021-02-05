import './App.css';
import Header from './components/Header'
import Task from './components/Task'
import { useState } from 'react';
import AddTask from './components/AddTask'


const App = () => { 

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 7:00pm",
    reminder: true
    },
    {
      id: 2,
      text: "School Appointment",
      day: "Feb 6th at 3:00pm",
      reminder: true
      },
      {
        id: 3,
        text: "See something",
        day: "Feb 3rd at 11:00am",
        reminder: false
        }

  ])

  const addTask =(task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTask([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((tasks) => tasks.id !== id))
  }

  const toggleReminder = (id) => {
   setTask(tasks.map((tasks) => tasks.id === id ? {...tasks, reminder: !tasks.reminder} : tasks))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Task onToggle={toggleReminder} task = {tasks} onDelete={deleteTask} />
    </div>
  );
}


export default App;