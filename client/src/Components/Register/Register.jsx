import React, { useState } from 'react';
//import './Login.css'
import '../../App.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'


//import our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'


//Imported Icons
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";



const Register = () => {
  // UseState to hold our inputs
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  // Onclick let us get what the user has entered
  const createUser = () => {
    // We shall require Axios to create an API that connects to the server
    // Lets install it
    Axios.post('http://localhost:3002/register', {
        // create variable to send to the server through the route
        Email: email,
        UserName: username,
        Password: password
    }).then(() => {
        console.log('User has been created')
    })
  }


  return (
    <div className="registerPage flex">
      <div className="container flex">


        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video> 
          
          <div className="textDiv">
            <h2 className="title">Register Page</h2>
            <p>Manage your time well! </p>
            <br></br>

            <div className="footerDiv flex">  
            <span className="text">Have an account?</span>
            <Link to={'/'}>
            <button className='btn'>Login</button>
            </Link>
          </div>
          </div>


        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know you!</h3>
          </div>

          <form action="" className='form grid'>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/> 
                <input type="email" id='email' placeholder='Enter Email'
                onChange={(event)=>{
                  setEmail(event.target.value) //set email to whatever is typed in
                }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/> 
                <input type="text" id='username' placeholder='Enter Username'
                onChange={(event)=>{
                  setUserName(event.target.value) //set email to whatever is typed in
                }}/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/> 
                <input type="password" id='password' placeholder='Enter Password'
                onChange={(event)=>{
                  setPassword(event.target.value) //set email to whatever is typed in
                }}/>
              </div>
            </div>

          <button type='submit' className='btn flex' onClick={createUser}>
            <span>Register </span>
            <AiOutlineSwapRight className='icon'/>
          </button>

          <span className='forgotPassword'>
            Forgot Password? <a href=''>Click Here</a>
          </span>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register