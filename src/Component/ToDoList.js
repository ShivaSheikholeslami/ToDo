import React, { useState } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import '../Component/ToDoList.css';


export default function ToDoList() {

    const[taskName,setTaskName]=useState("");
    const[time,setTime]=useState("");
    const[taskList,setTaskList]=useState([]);

    const addTask=(e)=>{
        e.preventDefault();
        setTaskList([...taskList,{task:taskName,time:time}])
        setTaskName("")
        setTime("")
    };

    
    

  return (
    <div>
     <h1>This is my To do list app</h1>
     <div className='Box'>
        <form inputText={inputText}>
        
        <input
          name="tasks"
          value={taskName}
          type="text"
          placeholder="write your tasks hete to do it"
          className="input-style"
          onChange={(e)=>setTaskName(e.target.value)}
        />
        <input
        name='time'
        value={time}
        type="text"
        placeholder='time you need...'
        onChange={(e)=>setTime(e.target.value)}
        />
        
        
        <button className="btnPlus" onClick={addTask}>+</button>
        
        </form>
        {/* <ToDoListItem taskName="Do homework"></ToDoListItem> */}
        
     </div> 
     <div>
           
         
         {
            task.map(task)=> (
                <React.Fragment>
                 <div>{task}</div>
                </React.Fragment>
            )
         }
             
         
     </div>
    </div>
  );
}
