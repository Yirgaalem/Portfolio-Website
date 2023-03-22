import './Contact.css' 
import {linkedin, github, resume, copyright} from '@assets'
function Contact(){
  return(
    <div id="Contact">
      <div className='socials'>
        <div className='linkedin_cont'><a href="https://linkedin.com/in/nahor" target="_blank"><img className='linkedin' src={linkedin}/></a></div>
        <div className="github_cont"><a href="https://github.com/Yirgaalem" target="_blank"><img className='github' src={github}/></a></div>
        <div className="resume_cont"><a href="src/assets/socials/Resume.pdf" target="_blank"><img className='resume' src={resume}/></a></div>
      </div>
      <div className="copy"><p className='author'><img src={copyright}  className="copyright" />Nahor Yirgaalem, 2023</p></div>
    </div>
  )
}
export default Contact;