import React, { useState } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import '../Component/ToDoList.css';
import Task from './Task';


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
        
        <div>
        <input
          name="tasks"
          value={taskName}
          type="text"
          placeholder="write your tasks hete to do it"
          className="input-style"
          onChange={(e)=>setTaskName(e.target.value)}
        />
        <input
        type="text"
        name='time'
        className="input-style"
        value={time}
        placeholder='time to complete the tasks...'
        onChange={(e)=>setTime(e.target.value)}
        />
        
        
        <button className="btnPlus" onClick={addTask}>Add</button>
        </div>

        <div>
           
         
           { taskList.map((task)=> {
                  return<Task taskName={task.task} time={task.time}/>
                 
              
           })}
               
           
       </div>
        
        
        {/* <Task taskName={taskName} time={time}></Task> */}
       
        
     </div> 
    
     
    </div>
  );
}
