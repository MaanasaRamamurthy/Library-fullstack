import React, {useEffect} from 'react'
import './Newsletter.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Newsletter = () => {
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
    return(
        <div className="newsletter section">
            <div data-aos="fade-up" data-aos-duration='2500' className="sectionContainer container">
                <h2>Subscribe Newsletters & get Latest News</h2>
                <div className="inputDiv-news">
                    <input type = 'text' placeholder='Enter your email address' className='newsletter-email search-form-elem flex flex-sb bf-white'/>
                    <button className='btn newsletter-button'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;