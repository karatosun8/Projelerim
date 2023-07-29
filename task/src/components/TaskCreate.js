import {useState} from "react"


function TaskCreate ({onCreate,task,taskFormUpdate,onUpdate}){//onCreate App.js e gönderildi
    const [title,setTitle] = useState(task ? task.title : " " )
    const [taskDesc,setTaskDesc] = useState(task ? task.taskDesc : " ")    // useState in içindekiler düzenle butonu için geçerli Aksi halde içi boş idi  
   
    const handleChange =(event)=>{
        setTitle(event.target.value)

    }
    const handleTaskChange =(event)=>{
        setTaskDesc(event.target.value)

    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id,title,taskDesc)
        }
        else {
            onCreate(title,taskDesc);//title ve taskCreate App.js e gönderdik
        }
        
        setTitle("");//handleSubmitten sonra input boşalır
        setTaskDesc("")//handleSubmitten sonra input boşalır

    };
    return (
    <div>
            {" "}
            {taskFormUpdate ? (
                <div className="task-update">
                <h3>Lütfen Task Düzenleyin</h3>
                <form className="task-form">
                    <label className="task-label">Başlığı Düzenleyiniz</label>
                    <input value={title} onChange={handleChange} className="task-input"/>
                    <label className="task-label">Taskı Düzenleyiniz</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
                    <button className="task-button update-button" onClick={handleSubmit}>Düzenle</button>
                </form>
            </div> 

            ) : (
                <div className="task-create">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="task-form">
                <label className="task-label">Başlık</label>
                <input value={title} onChange={handleChange} className="task-input"/>
                <label className="task-label">Task Giriniz</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
                <button className="task-button" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div> 
            ) }
            
        </div> )
}
          
    
    

       export default TaskCreate;