import React,{ useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from "react-router-dom"

const Signup = () => {
  
  const history = useNavigate();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = useState('')

  async function submit(e){
    console.log("hello")
    e.preventDefault()

    try{
      await axios.post("http://localhost:8000/", {
        email, password
      })
      .then((res) => {
        if(res.data=== 'exist'){
          alert("User already exists")
          
        }else if(res.data=== 'does not exist'){
          history.push("/home",{state:{id:email}})
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
      <form>
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
        {/* <input type="submit" onClick={submit}/> */}
        <button onClick={submit}>Submit</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup
