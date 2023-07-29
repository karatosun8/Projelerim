
import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks,setTasks] =useState([])
  const createTask =(title,taskDesc)=>{
    const createdTasks=[
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title,
        taskDesc

      }
    ];
    setTasks(createdTasks);
}
const deleteTaskById =(id)=>{
  const afterDeletingTasks= tasks.filter((task)=>{
    return task.id !==id;
  })
  setTasks(afterDeletingTasks)

}
const editTaskById =(id,updatedTitle,updatedtaskDesc)=>{
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
