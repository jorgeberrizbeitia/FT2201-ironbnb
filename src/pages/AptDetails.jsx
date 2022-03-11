import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

import RiseLoader from "react-spinners/RiseLoader";

function AptDetails() {

  const [ aptDetails, setAptDetails ] = useState(null)
  const [ fetching, setFetching ] = useState(true)
  // fetching seria un estado que revisa si mi componente está recibiendo informacion o no

  const { id } = useParams() // permitir el acceso de los params del URL
  const navigate = useNavigate() // permitir el uso de redireccionar

  useEffect(() => {
    getAptDetails()
  }, [])

  const getAptDetails = async () => {

    try {
      const response = await axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      console.log(response)
      setAptDetails(response.data)
      setFetching(false) // ahora si se renderizará
    } catch(err) {
      // setFetching(false)
      // dejarlo en la misma pagina con un error
      // enviarlo a una pagina especifica de error "/error"
      navigate("/error") // es una ruta sencilla con una pagina de error generica
    }

  }

  if (fetching) {
    return (
      <div>
        <RiseLoader color="#3f7ab5" size="20px"/>
      </div>
    )
  }

  return (
    <div>
    
      <h1>Detalles de Piso</h1>

      <h3>{aptDetails.title}</h3>
      <img src={aptDetails.img} alt="piso" />
      <p>Price: {aptDetails.pricePerDay}</p>

    </div>
  )
}

export default AptDetails