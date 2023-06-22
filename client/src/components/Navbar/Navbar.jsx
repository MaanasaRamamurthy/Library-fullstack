import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import LogoImg from "../../images/logo4.jpg"
import './Navbar.css'
import { useGlobalContext } from '../../context';


const Navbar = () =>{
    const {storedData, setStoredData} = useGlobalContext();
    const navigate = useNavigate();
    const handleClick = () => {
          navigate('/MyBooksRoute'); // Navigate to '/myBooks' route
        
      };

      const authPage = () => {
        navigate('/auth')
      }

    const [active, setActive] = useState('navBarMenu')
    const showNavBar = ()=> {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = ()=> {
        setActive('navBarMenu')
    }
const logout = () => {
    localStorage.removeItem('data');
    const remainingData = JSON.parse(localStorage.getItem('data'));

setStoredData(remainingData);
}

    return(
        <div className='navBar flex'>
            <div className='navBarOne flex'>
                <div>
                    <SiConsul className='icons'/>
                </div>
                <div className='none flex'>
                    <li className='flex'><BsPhoneVibrate className='icons'/>Support</li>
                    <li className='flex'><AiOutlineGlobal className='icons'/> Languages</li>

                </div>
                <div className='atb flex'>
                    {/* <span onClick={authPage}>Sign In</span>
                    <span>Sign Out</span> */}
                    <span onClick={storedData?logout:authPage}>{storedData?"Sign Out":"Sign In"}</span>
                </div>
            </div>
            <div className='navBarTwo flex'>
                <div className='logoDiv'>
                    <img src={LogoImg} className='logo' alt='logo'/>
                </div>
                <div className={active}>
                    <ul className='menu flex'>
                        <li onClick={removeNavBar} className='listItem'>Home</li>
                        <li onClick={removeNavBar} className='listItem'>About</li>
                        <li onClick={removeNavBar} className='listItem'>Search</li>
                        <li onClick={removeNavBar} className='listItem'>Services</li>
                        <li onClick={removeNavBar} className='listItem'>Contact</li>
                    </ul>
                    <button onClick={()=>{removeNavBar();handleClick()}} className='btn flex btnOne'>
                        MyBooks
                    </button>
                    <button onClick={storedData?handleClick:authPage} className='none btn flex btnTwo'>
                        MyBooks
                    </button>
                </div>
                <div onClick={showNavBar} className='none toggleIcon'>
                    <CgMenuGridO className='icons'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar