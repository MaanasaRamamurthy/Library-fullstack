import React, { useState, useEffect } from 'react'
import "./Auth.css"
import avatar from "../../images/avatar.png"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context';
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})
const signIn = (formData) => API.post('/users/signin', formData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
const signUp = (formData) => API.post('/users/signup', formData, {
  headers: {
    'Content-Type': 'application/json'
  }
});

const Auth = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
  const navigate = useNavigate()
  const {setStoredData} = useGlobalContext();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email:'', password:'', confirmpassword:''})
    const [errorDisplay, setErrorDisplay] = useState('')
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (isSignup) {
        await signUp(formData)
        .then((response) => {
          localStorage.setItem('data', JSON.stringify(response.data))
          setStoredData(JSON.parse(localStorage.getItem('data')))
          navigate('/');
        })
        .catch((error) => {
          console.log(error.response.data.message)
          setErrorDisplay(error.response.data.message)
        });
      } 
      
      else {
        await signIn(formData)
        .then((response) => {
          localStorage.setItem('data', JSON.stringify(response.data))
          setStoredData(JSON.parse(localStorage.getItem('data')))
          navigate('/');
        })
        .catch((error) => {
          console.log(error.response.data.message)
          setErrorDisplay(error.response.data.message)
        });
      }
        
    };
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const switchMode = () => {
      setIsSignUp((prevIsSignup) => !prevIsSignup)
    }
  return (
    <div className="container section">
    <div className="top-component sectionContainer">
      <div data-aos="fade-down" data-aos-duration='2000' className='display-form'>
      <img src={avatar} alt="avatar" className='avatar'/>
      <h2 data-aos="fade-right" data-aos-duration='2000'>{isSignup ? 'Sign Up': "Sign In"}</h2>
      <form data-aos="fade-down" data-aos-duration='2000' className='loginform' onSubmit={(e)=>handleSubmit(e)}>
        {
          errorDisplay&&(
            <p style={{color:"red"}}>
              {errorDisplay}
            </p>
        )}
        {
          isSignup && (
            <>
            <input className="auth-input input-border" type="text" name='firstName' label="FirstName" autoFocus onChange={handleChange} placeholder='First Name'/>
            <input className="auth-input input-border" type="text" name='lastName' label="LastName" onChange={handleChange} placeholder='Last Name'/>
            </>
        )}
        <input className="auth-input input-border" type="email" name="email" label="Email Address" onChange={handleChange} placeholder='Email Address' />
        <input className="auth-input input-border" type={showPassword? "text" : "password"} name="password" label="Password" onChange={handleChange} placeholder='Password'/>
        {isSignup && <input className="auth-input input-border" type="password" name="confirmpassword" label="Confirm Password" onChange={handleChange} placeholder='Confirm Password'/>}
        < button className='signin-signup'>
          {isSignup? 'Sign up' : 'Sign In'}
        </button>
        <p onClick={switchMode}>
          {isSignup ? 'Already have an account? Sign In': "Don't have an account? Sign Up"}
        </p>
      </form>
      </div>
      
    </div>
    </div>
  )
}

export default Auth
