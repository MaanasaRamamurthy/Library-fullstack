import React,{useState} from 'react'
import axios from 'axios'
import "./login.css"
import {useNavigate, Link} from "react-router-dom"

const Login = () => {

  const history = useNavigate();
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    console.log(e)
    e.preventDefault()

    try{
      await axios.post("http://localhost:8000/login", {
        email, password
      })
    .then((res) => {
      if(res.data=== 'exist'){
        history("/home",{state:{id:email}})
      }else if(res.data=== 'does not exist'){
        alert("User has not signed up")
      }
    })
    .catch((e) => {
      alert("Wrong credentials")
      console.log(e)
    })

    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <form action="POST">
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
        <button onClick={submit}>Submit</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login
