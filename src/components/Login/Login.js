import React, { useState } from 'react';
import Axios from "axios";
import Cookies from "universal-cookie";
import "../Login/Login.css";

function Login() {

  const [user ,setUser] = useState(null);
  const cookies = new Cookies();


  const clickHandler = async ()=>{
    await Axios.post("http://localhost:3001/api/login",user).then((res)=>{
      const userData = res.data[0];

      cookies.set("username",userData.username);
      cookies.set("reviewCount",userData.reviewCount);
      cookies.set("email",userData.email);
      cookies.set("_id",userData._id);
    });

    window.location.reload();
  };

  
  return (
    <div className='formLogin'>
  
      <div className='title'>LOGIN</div>
      <div class="subtitle">enter your info!</div>
    
      <div class="input-container ic1">
        <input id="username" 
        class="input" 
        type="text" 
        placeholder=" "
        required
        onChange={(event)=>{
          setUser({...user,username:event.target.value});
        }}
        />
        <div class="cut"></div>
        <label for="username" class="placeholder">User name</label>
      </div>


      <div class="input-container ic2">
        <input id="password" 
        class="input" 
        type="password" 
        placeholder=" " 
        required
        onChange={(event)=>{
          setUser({...user,password:event.target.value});
        }}
        />
        <div class="cut"></div>
        <label for="password" class="placeholder">Password</label>
      </div>
    
      <button type="text" class="submit" onClick={clickHandler}>submit</button>

    </div>

  )
}

export default Login;