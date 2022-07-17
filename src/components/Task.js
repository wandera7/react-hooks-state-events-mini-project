import React from "react";

function Task({category,text,taskDelete,id}) {
 function handleDelete(){
  taskDelete(id)
 }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}  >X</button>
    </div>
  );
}

export default Task;
