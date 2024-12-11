import TaskList from './TaskList'
import TaskForm from './TaskForm'
import ConectBackend from './ConnetBackend'
import {task as data} from './data'
import {useEffect,useState} from 'react'


export default function App(){
  const [task,setTask] = useState([])

  useEffect(()=>{
      setTask(data)
  },[])
function createTask(taskTitle){
  setTask([...task,{
    id:task.length,
    title:taskTitle,
    description:'Secreo por defecto'

  }])
}

  return(
    <>
    <TaskForm createTask={createTask}/>
    <TaskList task={task}/>
    <ConectBackend />
    </>
  )
}

