import React from 'react'
import { useState } from 'react'

function MyActivity() {
    const [toDelete, settoDelete] = useState(false);
    // const[toDone, settoDone] = useState(false);
function deleteHandler(){
    settoDelete(true);
};
// function doneHandler(){
//     settoDone(true);
// };

  return (
    <div>
        <h1 className="heading">My Activity</h1>
        <p>This is the actiity done by me</p>
        <div>
        <button className="btn btn-primary" onClick={() =>{console.log('done')}}>Do-this</button>
        <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </div>
        
        {toDelete && (console.log('delete'))}
    </div>
  )
}

export default MyActivity