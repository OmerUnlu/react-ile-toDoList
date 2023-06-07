import { createContext } from "react";
import {useState} from 'react'
import axios from 'axios';

const tasksContext = createContext();

function Provider({children}) {

    const [tasks, setTasks] = useState([""])

    const createTesk = async (title, text) => {
  
    const response = await axios.post('http://localhost:3004/posts',{
      title,
      text
    });
    console.log(response);
  
      const createdTasks = [
        ...tasks,
        response.data
      ]
      setTasks(createdTasks)         
    };
    
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:3004/posts')
      setTasks(response.data)
    }

    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3004/posts/${id}`)

const afterDeletingTasks = tasks.filter((task)=>{
return task.id !== id;
})
setTasks(afterDeletingTasks)
}

const newUptadetask = async (id,updatedTitle,updatedText) => {
await axios.put(`http://localhost:3004/posts/${id}`,{
title: updatedTitle,
text: updatedText
})
const updatedTasks = tasks.map((task) =>{
if(task.id === id){
return {id:id,title:updatedTitle,text:updatedText}

}else{
return task;
}
});
setTasks(updatedTasks);
}

const sharedValuesAndMethods = {
    tasks,
    createTesk,
    fetchTasks,
    deleteTaskById,
    newUptadetask
}

    return (
    <tasksContext.Provider value={sharedValuesAndMethods}>
        {children}
    </tasksContext.Provider>
    )
}

export {Provider};
export default tasksContext ;