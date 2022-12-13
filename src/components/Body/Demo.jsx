import React from 'react'

// const data = [
//     {title: "Alexa" , handle: "@alexa"},  
//     {title: "Cortana", handle: "@cortana"},
//     {title: "Siri" , handle: "@siri"}
// ];
// const {title, handle} = data;

function Demo({title,handle,image,description}) {
  return (

    <div class ="card rounded shadow mb-3 bg-warning text-center text-white">
        <img class="rounded w-100" src={image} alt="..." />
        <h1>Title is {title}</h1>
        <p>Handle is {handle}</p>
        <p>Description: {description}</p>
        <button class="btn btn-success w-50 m-auto mb-3">GoTo</button>      
    </div>
  )
}

export default Demo;