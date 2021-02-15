import React from 'react';
import './index.css';
import Header from './Header'
import {useState} from 'react'
import Tasks from './Tasks'
import AddTask from './AddTask'
const App = () => {

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState('')

//Add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}

  setTasks([...tasks,newTask])

}

//Delete Notes

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

//Toggle Reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: 
    !task.reminder} : task
      )
    )
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask &&  <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks = {tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Notes To Show'}
      

      </div>
  );
}

export default App;
