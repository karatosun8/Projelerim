
import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import axios from "axios"

function App() {
  const [tasks,setTasks] =useState([])
  const createTask =async (title,taskDesc)=>{

    const response=await axios.post("http://localhost:3004/tasks",{
      title,
      taskDesc
    }) //json data bs e port etmek için yani girilen bilgiler db.json dosyasına gider
    console.log(response)
    const createdTasks=[
      ...tasks,
      // {
      //   id:Math.round(Math.random()*999999),
      //   title,
      //   taskDesc
      // }
      response.data
    ];
    setTasks(createdTasks);
};


// useEffect kullanarak girilen bilgiler reset atılsa bile silinmez db.json dosyasında kalır.get kullanarak bilgileri alabiliriz
const fetchTasks = async ()=>{

  const response= await axios.get("http://localhost:3004/tasks")
 setTasks(response.data)
}
//Aşağıdaki kod bi defa çalıştırılır [] den dolayı
useEffect(()=>{

  fetchTasks ();
 
},[])



const deleteTaskById =async (id)=>{
  await axios.delete(`http://localhost:3004/tasks/${id}`)
  const afterDeletingTasks= tasks.filter((task)=>{
    return task.id !==id;
  })
  setTasks(afterDeletingTasks)

}


//db deki json dosyasını güncellemek için
const editTaskById =async (id,updatedTitle,updatedtaskDesc)=>{
  
  await axios.put(`http://localhost:3004/tasks/${id}`,{
    title:updatedTitle,
    taskDesc:updatedtaskDesc

  })
  const updatedTasks= tasks.map((task)=>{
    if(task.id===id){
      return {id,title:updatedTitle,taskDesc:updatedtaskDesc}
    }
    return task;
    
  })
  setTasks(updatedTasks)

}
  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/> {/*onCreate yakalandı*/}
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
