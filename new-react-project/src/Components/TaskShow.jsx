import React, {useState} from 'react'
import MainTask from './MainTask';
import tasksContext from '../Context/Task'
import {useContext} from 'react'

function TaskShow({task}) {
  const {deleteTaskById,newUptadetask} = useContext(tasksContext);

  /* GÜNCELLEMEK */
  const [showEdit, setShowEdit] = useState(false)
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  };
   /* SİLMEK */
   const handleDeleteClick = () => {
    deleteTaskById(task.id)
  };
  // new update
  const newSubmit = (id,updatedTitle,updatedText) => {
    setShowEdit(false)
    newUptadetask(id,updatedTitle,updatedText)
  };
    return (
    <>
      <div className='sarmal'>
        {showEdit ? (<> <MainTask task={task} taskFormUpdate={true} onUpdate={newSubmit}/> </>) : (
          <>
              <h3>GÖREVİNİZ</h3>
              <p>{task.title}</p>
              <h3>YAPILACAKLAR</h3>
              <p>{task.text}</p>
              <div>
                <button onClick={handleDeleteClick} id='first'>DELETE</button>
                <button onClick={handleEditClick} id='second'>UPDATE</button>
              </div>
          </>
        )}
      </div>
    </>
  )
}

export default TaskShow
