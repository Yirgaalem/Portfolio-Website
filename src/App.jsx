import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Intro from './Intro'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="First_Page">
        <Navbar></Navbar>
        
      </div>
      <div>
        <Intro></Intro>
      </div>
    </div>
  )
}

export default App
