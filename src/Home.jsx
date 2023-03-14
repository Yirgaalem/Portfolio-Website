import './Home.css'
function Home(){
  return(
      
      <div id="Home">
       <div className="container"> 
          <img className="deskImage"src="src/assets/desk.png"></img>         
          <h1 className='Hello'>Hi, I'm Nahor Yirgaalem</h1>  
          <p className='Desc'>University Student and Full Stack Developer</p>
          <button className="continue">Continue</button>
        </div>
      </div>
  )
}

export default Home;