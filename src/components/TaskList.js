import React, { useState } from "react";
import Task from "./Task";
function TaskList({tasks ,onDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task,index)=> <Task key={index} 
      id={index}
      text={task.text}
      taskDelete={onDelete} 
      category={task.category}/> )}
    </div>
  );
}

export default TaskList;
