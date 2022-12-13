import React ,{useState} from 'react';
import Axios from "axios";

function Signup() {

  const [user ,setUser] = useState(null);

  const clickHandler = async ()=>{
    await Axios.post("http://localhost:3001/api/register",user).then((res)=>{
      console.log("user has been added to DB.");
    });

    window.location.reload();

  };

  return (
 
    <div className='formSignup'>
  
      <div className='title'>SIGN UP</div>
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
        <input id="email" 
        class="input" 
        type="email" 
        placeholder=" " 
        required
        onChange={(event)=>{
          setUser({...user,email:event.target.value});
        }}
        />
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
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

export default Signup;