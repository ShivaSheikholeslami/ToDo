// import React from 'react';
// import { FaEdit,FaTrash} from 'react-icons/fa';


// export default function ToDoListItem({taskName}) {
//   return (
//     <div>
//         <li>Hey</li>
//         <button style={{width:"50px",height:"50px"}}><i className={FaEdit}>Edit</i></button>
//         <button style={{width:"50px",height:"50px"}}><i className={FaTrash}>delete</i></button>
//     </div>
//   );
// }
import React from 'react';

export default function Task({taskName,time}) {
  return (
    <div className='task'>
        <div>
            <h4>TaskName:{taskName}</h4>
            <h4>Time to complete:{time}</h4> 
        </div>
    </div>
  )
}
