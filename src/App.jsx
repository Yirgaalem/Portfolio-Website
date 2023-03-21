import { useState } from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

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
