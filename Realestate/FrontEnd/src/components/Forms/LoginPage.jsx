import React from 'react';
import { Link } from "react-router-dom";
import {useState , useEffect} from 'react';
import App from '../../App'
import Home from '../home/Home'
import axios from 'axios'
import './LogIn.css';
const LoginPage = () => {
  const [isRegister,setRegister] =  useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [ps1, setPassword] = useState("");
  const [users, setUsers] = useState("");
  const handleusername = (e) =>{
    setUsername(e.target.value)
  
  }
  const handlepassword=(e)=>{
    setPassword(e.target.value)
  }
useEffect(()=>{
  axios.get("http://localhost:4000/login") 
    .then((res)=>{
      setUsers(res.data)
    })
},[])

  
  const handleLogin = (e) => {
 e.preventDefault();
    console.log("In handle loginn");
    const user=users.find((ele)=>{
      return ele.username===username && ele.pwd1===ps1;});
    if(user===null || user===undefined){
      alert("Not exist")
    }
    // console.log(response.stringify.JSON())
    // setUsers(response.stringify.JSON())
    // console.log(users)
     console.log("Successfully Logged in ");
   window.location.href='/'
   
   }
  

    return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>      
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="username"
            // value={username}
            onChange={handleusername}
            required
          />
        </div>

         <div>
           <label htmlFor="password">Password:</label>
           <input
            type="password"
            id="password"
            name="password"
            // value={password}
            onChange={handlepassword}
            required
          />
        </div>
        
          <button className="button1" type="submit" >Login</button>
        
      </form>

      <center>
      <a href="https://www.facebook.com/login/" style={{ textDecoration: 'underline' }}><span style={{color:'darkblue'}}><i class="fa-brands fa-facebook"></i><u>Facebook</u></span></a>&nbsp; &nbsp;
      <a href="https://myaccount.google.com/" style={{ textDecoration: 'underline' }}><span style={{color:'darkblue'}}><i class="fa-brands fa-google"></i><u>Google</u></span></a>
      <div>
        <p>Not a member?</p>
        <Link to="/SignInPage">
        <div className='button2'><u>Sign Up</u></div>
        </Link>
      </div>
      </center>
    </div>
  
  );
}


export default LoginPage;