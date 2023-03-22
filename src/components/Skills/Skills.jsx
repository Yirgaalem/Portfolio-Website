import './Skills.css'
import {Python, C, Cpp, java, SQL, VBA, JS, TS, html, CSS, React} from '@assets'
function Skills(){
  return(
    <div id="Skills">
      <h1 className="skillsHeader">Skills</h1>
      <div className="icons">
        <div className='four'> <a href="https://www.python.org/" target="_blank"><img className='icon' src={Python}/></a></div>

        <div className='four'> <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank"><img className='icon' src={C}/></a></div>

        <div className="four"> <a href="https://cplusplus.com/doc/tutorial/" target="_blank"><img className="icon" src={Cpp}/></a></div>

        <div className="four"> <a href="https://www.java.com/en/" target="_blank"><img className="icon" src={java}/></a></div>

        <div className="four"> <a href="https://www.mysql.com/" target="_blank"><img className="icon" src={SQL}/></a></div>

        <div className="four"> <a href="https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office" target="_blank"><img className="icon"src={VBA}/></a></div>

        <div className="four"> <a href="https://www.javascript.com/" target="_blank"><img className="icon" src={JS}/></a></div>

        <div className="four"> <a href="https://www.typescriptlang.org/" target="_blank"><img className="icon" src={TS}/></a></div>

        <div className="three"> <a href="https://html.com/" target="_blank"><img className="iconT" src={html}/></a></div>        

        <div className="three"> <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img className="iconT" src={CSS}/></a></div>

        <div className="three"><a href="https://reactjs.org/" target="_blank"><img className="iconT" src={React}/></a></div>
        </div>
    </div>
  )
}

export default Skills