import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

function App() {

  return (
    
    <div className="App">

      <Navbar></Navbar>

      <div className="First_Page">
        <Home></Home>
      </div>
      
      <div className='Second Page'>
        <Projects></Projects>
      </div>

    </div>
  )
}

export default App
