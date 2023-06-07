import React , {useState} from 'react'
import tasksContext from '../Context/Task'
import {useContext} from 'react'

function MainTask({taskFormUpdate , task, onUpdate}) {
  const {createTesk} = useContext(tasksContext);


  const [title, setTitle] = useState(task ? task.title : "");
  const [text, setText] = useState(task ? task.text : "");

  const titleChange = (event) => {
    setTitle(event.target.value);
  }
  const textChange = (event) => {
    setText(event.target.value);
  }
  const newTask = (event) => {
       event.preventDefault();
       if(taskFormUpdate){
        onUpdate(task.id, title, text)
       }else{
        createTesk(title,text)
       }; 
       setTitle("");
       setText("");
      }
  return (
    <>
      {taskFormUpdate ? ( 
      <>
        <form className='container-true'>
            <h3>Please UPDATE Task!</h3>
            
            <label htmlFor="header">Update Header</label>
            <input  value={title} onChange={titleChange} id='header' name='header' />

            <label htmlFor="content">Update Content</label>
            <textarea value={text} onChange={textChange} rows={5} id='content' name='content' />

            <button className='mainButton-true' onClick={newTask}>UPDATE NEW TASK</button>

        </form>
      </>  ) : (
        <>
        <form className='container'>
            <h3>Please Add Task!</h3>
            
            <label htmlFor="header">Header</label>
            <input  value={title} onChange={titleChange} id='header' name='header' />

            <label htmlFor="content">Content</label>
            <textarea value={text} onChange={textChange} rows={5} id='content' name='content' />

            <button className='mainButton' onClick={newTask}>CREATE NEW TASK</button>

        </form>
      </>       
      )}
     
    </>
  );
}

export default MainTask