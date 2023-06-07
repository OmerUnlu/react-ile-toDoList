import 'bulma/css/bulma.css'
import React, { useEffect, useContext} from 'react'
import './App.css'
import MainTask from './Components/MainTask'
import TaskList from './Components/TaskList'
import tasksContext from './Context/Task'

function App() { 

  const {fetchTasks} = useContext(tasksContext)

  useEffect(()=>{
   fetchTasks();
  },[]);

  return (
    <>
      <div>
        <MainTask/>
        <h1 id='neww'>YOUR TASKS</h1>
        <TaskList/>     
      </div>
    </>
  )
}

export default App
