import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

function AptList() {

  // 1. crear el estado que manejara la info
  const [ apartments, setApartments ] = useState(null)

  // 2. el useEffect que llamará al componenDidMount
  useEffect(() => {
    getApartments()
  }, [])

  // 3. function que va a llamar la data de la API
  const getApartments = async () => {

    const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
    console.log(response.data)
    setApartments(response.data)

  }

  if (!apartments) {
    return <h2>... is Loading</h2>
  }

  return (
    <div>
    
      <h1>Pisos Disponibles</h1>
      {apartments.map((eachApt) => {
        return (
          <div key={eachApt._id}>
            {/* <p>{eachApt.title}</p> */}
            <Link to={`/pisos/${eachApt._id}/details`}>{eachApt.title}</Link>
          </div>
        )
      })}
    
    </div>
  )
}

export default AptList