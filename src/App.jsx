import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <h1>Hi, I'm Nahor Yirgaalem</h1>
      
      <div class="main">
      
        <p>University Student and Full Stack Developer</p>
        <button class="more_about_me" onClick={()=> setCount((count) => count + 1)}>More about me</button>

      </div>
      
    </div>
  )
}

export default App
