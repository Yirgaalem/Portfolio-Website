import './Home.css'
import {desk} from '@assets'
function Home(){
  return(
      
      <div id="Home">
        <div className="deskContainer">
          <img src={desk}></img> 
        </div>
      <div className="container">          
        <h1 className='Hello'>Hi, I'm Nahor Yirgaalem</h1>  
        <p className='Desc'>University Student and Full Stack Developer</p>
        <button className="continueButton"><a className='continue' href="#Projects">Continue</a></button>
      </div>

      
      </div>

  )
}

export default Home;