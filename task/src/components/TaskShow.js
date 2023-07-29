import { useState } from "react";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete,onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!false);
  };
  const handleSubmit = (id,updatedTitle,updatedtaskDesc) => {
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedtaskDesc)
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <>
        <TaskCreate task= {task} taskFormUpdate={true} onUpdate={handleSubmit}/>
        
        </>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskShow;
