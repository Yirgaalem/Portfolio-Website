import './Projects.css'
import { Carousel } from '@mantine/carousel';

function Projects(){
    return(
        <div>
            <h1>Projects</h1>
            <Carousel
                withIndicators
                height={200}
                slideSize="33.333333%"
                slideGap="md"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                loop
                align="start">
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                
            </Carousel>
        </div>
        
    )
}
export default Projects