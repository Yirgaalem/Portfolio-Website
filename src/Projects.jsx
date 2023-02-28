import './Projects.css'
// import { Carousel } from '@mantine/carousel';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"



function Projects(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(  
        <div id="Projects">
            <h1>Projects</h1>
            <Carousel responsive={responsive}>
              
                <div className="DiscordProject">
                    <img src="src\assets\DiscordBotProject.png"/>
                    <button><a className="discordLink" href="https://github.com/Yirgaalem/Loggy-Discord-Bot" target="_blank">View Code</a></button>
                </div>

                <div className="PortfolioWebsite">
                  <img src="src\assets\PortfolioProject.png"/>
                  <button><a className="portfolioLink" href="https://github.com/Yirgaalem/Portfolio-Website" target="_blank">View Code</a></button>
                </div>

                <div>
                  <img src="src\assets\SimpleViewProject.png"/>
                  <button className="simpleButton"><a className="simpleViewLink" href="https://github.com/Yirgaalem/OpenGL-RaceWay" target="_blank">View Code</a></button>
                </div>

            </Carousel>
            
        </div>
        
    )
}
export default Projects