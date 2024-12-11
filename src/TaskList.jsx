import React from 'react'


function TaskList(props) {



    if (props.task.length === 0) {
        return <h1>No hay tareas AUN</h1>
    }
  return (
    <div >
        {props.task.map((task)=>(
            <div key={task.id}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        ))}
    </div>
  )
}

export default TaskList