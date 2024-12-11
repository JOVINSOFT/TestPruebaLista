import React, { useState } from 'react'




function TaskForm(props) {
    const [title, setTitle] = useState("")
const handleSubmit =(e) =>{
     e.preventDefault()
 
    props.createTask(title)
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='Escribe el texto'
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        />
        <button>Guardar 🫡</button>
    </form>
  )
}

export default TaskForm