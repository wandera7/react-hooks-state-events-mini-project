import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksView,setTasksView]=useState(TASKS)
  const [categories,setCategories]=useState(CATEGORIES)
  

  const filterCategory=(category)=>{
    if(category==='All'){
     return setTasksView(TASKS)
      
    }
    const newTasks=TASKS.filter((task)=>task.category===category)
    setTasksView(newTasks)
    
  }

  function addTask(taskObj){
    const newTasks=[...tasksView,taskObj]
    setTasksView(newTasks)
  }

  function deleteTask(id){
    setTasksView((prevValue)=>{
      return prevValue.filter((task,index)=>{
        return index!==id
      })
    })
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}  taskFilter={filterCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList onDelete={deleteTask} tasks={tasksView} />
    </div>
  );
}

export default App;
