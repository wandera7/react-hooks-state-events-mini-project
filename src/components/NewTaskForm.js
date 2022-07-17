import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [taskName,setTaskName]=useState(' ')
  const [taskCategory,setTaskCategory]=useState('Code')
  const newCategories=categories.slice(1)
  function handleCategroyChange(e){
    setTaskCategory(e.target.value)
  }
  function handleNameChange(e){
    setTaskName(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    const newData={
      text:taskName,
      category:taskCategory
    }
    onTaskFormSubmit(newData)
    setTaskName(' ')
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskName}  onChange={handleNameChange}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleCategroyChange} >
          {newCategories.map((category,index)=>{
            return <option key={index}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit"  value="Add task" />
    </form>
  );
}

export default NewTaskForm;
