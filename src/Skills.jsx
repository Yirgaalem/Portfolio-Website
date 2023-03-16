import './Skills.css'

function Skills(){
  return(
    <div id="Skills">
      <h1>Skills</h1>
      <p>Add pictures of skills you know, you can break it into languages, frameworks if you want. </p>
      <div className="icons">
        <div className='Python'> <a href="https://www.python.org/" target="_blank"><img className='icon' src="src/assets/icons/Python.svg"/></a></div>

        <div className='C'> <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank"><img className='icon' src="src/assets/icons/C.svg"/></a></div>

        <div className="cpp"> <a href="https://cplusplus.com/doc/tutorial/" target="_blank"><img className="icon" src="src/assets/icons/Cpp.svg"/></a></div>

        <div className="java"> <a href="https://www.java.com/en/" target="_blank"><img className="icon" src="src/assets/icons/Java.svg"/></a></div>

        <div className="sql"> <a href="https://www.mysql.com/" target="_blank"><img className="icon" src="src/assets/icons/SQL.svg"/></a></div>

        <div className="vba"> <a href="https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office" target="_blank"><img className="icon"src="src/assets/icons/VBA.jpg"/></a></div>

        <div className="js"> <a href="https://www.javascript.com/" target="_blank"><img className="icon" src="src/assets/icons/JS.svg"/></a></div>

        <div className="ts"> <a href="https://www.typescriptlang.org/" target="_blank"><img className="icon" src="src/assets/icons/TS.svg"/></a></div>

        <div className="html"> <a href="https://html.com/" target="_blank"><img className="icon" src="src/assets/icons/html.png"/></a></div>        

        <div className="css"> <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img className="icon" src="src/assets/icons/CSS.svg"/></a></div>

        <div className="react"><a href="https://reactjs.org/" target="_blank"><img className="icon" src="src/assets/icons/React.svg"/></a></div>
        </div>
    </div>
  )
}

export default Skills