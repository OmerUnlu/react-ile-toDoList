import React from 'react'
import TaskShow from './TaskShow'
import tasksContext from '../Context/Task'
import {useContext} from 'react'


function TaskList() {
  const {tasks} = useContext(tasksContext);

  return (
    <>
      <div className='genelContainer'>
        {tasks.map((task, index) => {
          return (
            <TaskShow key={index} task={task}/>
          )
        })}
      </div>
    </>
  )
}

export default TaskList