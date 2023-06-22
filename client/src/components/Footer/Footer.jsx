import React,{useEffect} from 'react'
import './Footer.css'
import logoImg from "../../images/logo4.jpg";
import {TiSocialFacebook} from 'react-icons/ti'
import {FaPinterestP } from 'react-icons/fa';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
    return(
    <div className='footer'>
        <div className='sectionContainer container grid'>
            <div  data-aos="fade-up" data-aos-duration='2500' className='gridOne'>
                <div className='logoDiv'>
                    <img src={logoImg} alt="" className='Logo'/>
                </div>
                <p className='p-footer'>Discover new worlds between the pages.</p>
                <div className='socialIcon flex'>
                    <TiSocialFacebook className='icon'/>
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <FaPinterestP className='icon'/>
                </div>
                </div>
                <div  data-aos="fade-up" data-aos-duration='2500' className='footerLinks'>
                    <span className="linkTitle">Information</span>
                    <li>
                       
                        <a className= "footer-link" href="/">Home</a>
                    </li>
                    <li>
                        
                        <a className= "footer-link"href="/">About Us</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Borrowing Policies</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Search Books</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Library Services</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Donate</a>
                    </li>
                </div>
                <div  data-aos="fade-up" data-aos-duration='2500' className='footerLinks'>
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a className= "footer-link"href="/">FAQ</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">How to use the library</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Book Recommendations</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Events and Workshops</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Privacy Policy</a>
                    </li>
                </div>
                <div  data-aos="fade-up" data-aos-duration='2500' className='footerLinks'>
                    <span className="linkTitle">Information</span>
                    <li>
                        <a className= "footer-link"href="/">Terms of Service</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Careers</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Partnerships</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Careers</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Programme Rules</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Volunteer</a>
                    </li>
                </div>
            </div>
        <div className="copyRightDiv flex">
            <p>Embrace the Joy of Reading - &copy; <a href="https://emailto-maanasaramamurthy@gmail.com" target='_blank' rel="noreferrer">Maanasa</a></p>
        </div>
    </div>
)}

export default Footer;