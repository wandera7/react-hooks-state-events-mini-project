import React, { useState } from "react";

function CategoryFilter({categories,taskFilter}) {
  const [select,setSelect]=useState(0)
  
  
      return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category,index)=>{
          return ( 
            <button key={index}  onClick={()=>{
              taskFilter(category)
              setSelect(index)
              }}
               className={select===index?'selected':null}>{category}</button>
           
        )})

      }
    </div>
  );
}

export default CategoryFilter;
