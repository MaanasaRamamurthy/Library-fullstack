import React, {useEffect} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 data-aos="fade-right" data-aos-duration='2500' className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p data-aos="fade-right" data-aos-duration='2500' className='header-text fs-18 fw-3'>Discover a world of captivating stories and knowledge. Explore our vast collection and uncover the perfect book to ignite your imagination. Whether you seek thrilling adventures, insightful non-fiction, or timeless classics, we have something for every avid reader. Let the journey begin!</p>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header