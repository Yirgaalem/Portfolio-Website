import './Contact.css' 
function Contact(){
  return(
    <div id="Contact">
      <div className='socials'>
        <div className='linkedin_cont'><a href="https://linkedin.com/in/nahor" target="_blank"><img className='linkedin' src='src/assets/socials/linkedin.svg'/></a></div>
        <div className="github_cont"><a href="https://github.com/Yirgaalem" target="_blank"><img className='github' src='src/assets/socials/github.svg'/></a></div>
        <div className="resume_cont"><a href="src/assets/socials/Resume.pdf" target="_blank"><img className='resume' src='src/assets/socials/resume.png'/></a></div>
      </div>
      <div className="copy"><img src="src/assets/socials/copyright.png"  className="copyright" /><text className='author'>Nahor Yirgaalem, 2023</text></div>
    </div>
  )
}
export default Contact;