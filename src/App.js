import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import AptList from './pages/AptList';
import AptDetails from './pages/AptDetails';
import AptAdd from './pages/AptAdd';
import { useState } from 'react';

function App() {

  const [ darkTheme, setDarkTheme ] = useState(true)

  const darkStyles = {
    backgroundColor: "black",
    color: "darkGray"
  }

  const lightStyles = {
    backgroundColor: "white",
    color: "black"
  }

  const handleToggle = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="App" style={darkTheme ? darkStyles : lightStyles}>

      <button onClick={ handleToggle }>Cambiar</button>

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/pisos" element={ <AptList /> }/>
        <Route path="/pisos/:id/details" element={ <AptDetails /> }/>
        <Route path="/pisos/add" element={ <AptAdd /> } />

      </Routes>

    </div>
  );
}

export default App;
