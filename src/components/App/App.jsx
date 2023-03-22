import { useState } from 'react'
import './App.css'
import {Navbar, Home, Projects, Skills, About, Contact} from '@components'

function App() {

  return (
    

    <div id="App">
      
      <Navbar></Navbar>

      <Home></Home>
      
      <div id='Projects_Page'>
        <Projects></Projects>
      </div>
      
      <div id='Skills_Page'>
        <Skills></Skills>
        
      </div>
      
      <div id='About_Page'>
        <About></About>
      </div>

      <div id='Contact_Page'>
        
        <Contact></Contact>
      </div>

    </div>
  )
}

export default App
