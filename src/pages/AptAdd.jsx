import { useState } from 'react'
import axios from "axios"

import { useNavigate } from "react-router-dom"

function AptAdd() {

  const [ title, setTitle ] = useState("")
  const [ img, setimg ] = useState("")
  const [ pricePerDay, setPricePerDay ] = useState(0)

  const navigate = useNavigate() // nos permite redireccionar al usuario


  const handleSubmit = async (event) => {
    
    // prevenir el comportamiento del form
    event.preventDefault()

    // enviar los estados al endpoint para crear un nuevo piso
    const newApt = { title, img, pricePerDay }
    await axios.post("https://ironbnb-m3.herokuapp.com/apartments", newApt)

    // redireccionar al usuario a "/pisos"
    navigate("/pisos")

  }

  return (
    <div>
    
      <h1>Agregar Piso</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="img">Image:</label>
        <input 
          type="text" 
          name="img" 
          value={img}
          onChange={(e) => setimg(e.target.value)}
        />
        <br />
        <label htmlFor="pricePerDay">Precio:</label>
        <input 
          type="number" 
          name="pricePerDay" 
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
        />
        <br />
        
        <button>Agregar</button>

      </form>

    </div>
  )
}

export default AptAdd