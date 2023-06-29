import axios from 'axios';
import React, { useState } from 'react';
import Home from "../home/Home"
// import LoginPage from './LoginPage'; 
import { useNavigate,Link } from "react-router-dom";


function SignInPage() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name,setname]=useState("")
  const [username,setusername]=useState("")
  const [ps1,setps1]=useState("")
  const [ps2,setps2]=useState("")
  async function submit(e){
    e.preventDefault();
    let users = {
      "name":name,
      "username":username,
      "ps1":ps1,
      "ps2":ps2
    }
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({users})
  };
  if(users.ps1==users.ps2){
  axios.post('http://localhost:4000/postuser', {users})
      .then(response => {
       window.location.href='/LoginPage';
      })
  }
  else{
    alert("Password does not match with confirm password")
  }
  }
  return (
    
    
    <div className='container-signup signup-container'>
          <form className='shadow' action='POST'>
            <div class="signup-form">
                <h2>Sign Up</h2>
                <div className="input-container">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Full Name" onChange={(e)=>{setname(e.target.value)}}  />&nbsp;&nbsp;
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email Address" required="required" onChange={(e)=>{setusername(e.target.value)}} />&nbsp;&nbsp;
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required" onChange={(e)=>{setps1(e.target.value)}} />&nbsp;&nbsp;
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Confirm Password" required="required" onChange={(e)=>{setps2(e.target.value)}} />&nbsp;&nbsp;
                  </div>
                  <div class="form-group">
                    <center><button type="submit" onClick={submit} class="btn btn-primary btn-block">Sign Up</button></center>
                  </div>
                <h4 class="text-center">Already have an account? <Link to="/LoginPage"><u>Log in</u></Link></h4>
                </div>
            </div>
          </form>
    </div>
    
    );
    }
      
	

            
  

export default SignInPage;