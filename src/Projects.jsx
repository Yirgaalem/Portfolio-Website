import './Projects.css'
import { Carousel } from '@mantine/carousel';

function Projects(){

    return(  
        <div id="Projects">
            <h1>Projects</h1>

            <Carousel className='Carousel' withIndicators
              height={400}
              slideSize="50%"
              slideGap="md"
              loop
              align="center"
              breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
              ]}>
                
                <Carousel.Slide>
                  
                  <div className="DiscordProject">
                      <img src="src\assets\projects\DiscordBotProject.png"/>
                  </div>
                  <button className='code'><a className="discordLink" href="https://github.com/Yirgaalem/Loggy-Discord-Bot" target="_blank">View Code</a></button>
                </Carousel.Slide>

                <Carousel.Slide>
                  <div className="PortfolioWebsite">
                    <img src="src\assets\projects\PortfolioProject.png"/>
                  </div>
                  <button className='code'><a className="portfolioLink" href="https://github.com/Yirgaalem/Portfolio-Website" target="_blank">View Code</a></button>
                </Carousel.Slide>

                <Carousel.Slide>
                  <div>
                    <img src="src\assets\projects\SimpleViewProject.png"/>
                  </div>
                  <button className="code"><a className="simpleViewLink" href="https://github.com/Yirgaalem/OpenGL-RaceWay" target="_blank">View Code</a></button>
                </Carousel.Slide>

            </Carousel>
            
        </div>
        
    )
}
export default Projects