
import React, { useState } from 'react'
import axios from 'axios';



function ConectBackend() {



    const [title, setTitle] = useState("")
    const handleSubmit =(e) =>{
         e.preventDefault()

         console.log('Los Datos Traidos !');


         axios.get('http://167.71.105.92:4000/api/notariaDev2/v1/tipoTansaccion')
  .then(response => {
    console.log(response.data); // Maneja la respuesta
  })
  .catch(error => {
    console.error(error); // Maneja errores
  });
         
    }
    
      return (
        <form onSubmit={handleSubmit}>

            <button>Traer Datos 🫡</button>
        </form>
      )
}

export default ConectBackend