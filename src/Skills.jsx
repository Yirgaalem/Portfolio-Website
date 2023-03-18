import './Skills.css'

function Skills(){
  return(
    <div id="Skills">
      <h1 className="skillsHeader">Skills</h1>
      <div className="icons">
        <div className='four'> <a href="https://www.python.org/" target="_blank"><img className='icon' src="src/assets/icons/Python.svg"/></a></div>

        <div className='four'> <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank"><img className='icon' src="src/assets/icons/C.svg"/></a></div>

        <div className="four"> <a href="https://cplusplus.com/doc/tutorial/" target="_blank"><img className="icon" src="src/assets/icons/Cpp.svg"/></a></div>

        <div className="four"> <a href="https://www.java.com/en/" target="_blank"><img className="icon" src="src/assets/icons/Java.svg"/></a></div>

        <div className="four"> <a href="https://www.mysql.com/" target="_blank"><img className="icon" src="src/assets/icons/SQL.svg"/></a></div>

        <div className="four"> <a href="https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office" target="_blank"><img className="icon"src="src/assets/icons/VBA.jpg"/></a></div>

        <div className="four"> <a href="https://www.javascript.com/" target="_blank"><img className="icon" src="src/assets/icons/JS.svg"/></a></div>

        <div className="four"> <a href="https://www.typescriptlang.org/" target="_blank"><img className="icon" src="src/assets/icons/TS.svg"/></a></div>

        <div className="three"> <a href="https://html.com/" target="_blank"><img className="iconT" src="src/assets/icons/html.png"/></a></div>        

        <div className="three"> <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img className="iconT" src="src/assets/icons/CSS.svg"/></a></div>

        <div className="three"><a href="https://reactjs.org/" target="_blank"><img className="iconT" src="src/assets/icons/React.svg"/></a></div>
        </div>
    </div>
  )
}

export default Skills