import React from 'react'

import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
    
      <NavLink to="/">
        {( {isActive} ) => {
          return <button className={ isActive ? "nav-active" : "nav-unactive" }>Home</button>
        }}
      </NavLink>

      <NavLink to="/pisos" end> 
      {( {isActive} ) => {
          return <button className={ isActive ? "nav-active" : "nav-unactive" }>Ver Pisos</button>
        }}
      </NavLink>

      <NavLink to="/pisos/add">
      {( {isActive} ) => {
          return <button className={ isActive ? "nav-active" : "nav-unactive" }>Agregar Piso</button>
        }}
      </NavLink>
    
    </div>
  )
}

export default Navbar