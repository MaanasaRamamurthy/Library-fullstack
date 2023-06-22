import React, {useEffect} from 'react';
import "./About.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import aboutImg from "../../images/Library.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  return (
    
      <div className='container'>
        <div data-aos="fade-right" data-aos-duration='2500' className='section-title about-title'>
          <p className='about-bookhub'>About BookHub</p>
          <h2>Books: where words dance, minds wander, and dreams take flight.</h2> 
        </div>
        <div className='about-content grid'>
          <div data-aos="fade-up" data-aos-duration='2500' className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Storytellers' Haven</p>
              <p className='fs-17'> Step into our haven of words and embark on a journey where stories come alive. We are a community of book lovers, dreamers, and storytellers, united by our shared love for literature.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Knowledge Hub</p>
              <p className='fs-17'>Unleash the power of knowledge. Our library is a gateway to endless wisdom, empowering you to explore new ideas and expand your horizons.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Reading Revolution</p>
              <p className='fs-17'>  Join the movement. Our library fosters a vibrant reading community, sparking a passion for books and transforming lives through the magic of storytelling.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
