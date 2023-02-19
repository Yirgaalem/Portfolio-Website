import './Navbar.css'

/*
    Nav Bar is set to the end of root. not head or maybe even better body
*/
function Navbar(){
    return (
        <ul className="navbar">
            <li><a className="Home" href="#home">Home</a></li>
            <li><a className="Projects" href="Second Page">Projects</a></li>
            <li><a className="About" href="#about">About</a></li>
            <li><a className="Resume" href='src\assets\Resume.pdf' target="_blank">Resume</a></li>
            <li><a className="Contact" href="#contact">Contact</a></li>
        </ul>
    )
}
export default Navbar;