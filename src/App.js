import React ,{useState ,useEffect} from 'react';
import Cookies from "universal-cookie";
import Header from './components/Header/Header.js'; 
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import TaskBar from './components/TaskBar/TaskBar.js';
import './App.css';

function App() {

  const cookies = new Cookies();
  
  const [showLogin,setShowLogin] =useState(false);
  const [showSignup,setShowSignup] =useState(false);
  const [userLogged , setUserLogged] = useState(false);


  const handlerClickLogin =(btnName)=>{
    setShowLogin(true);
    setShowSignup(false);
  };

  const handlerClickSignup =(btnName)=>{
    setShowSignup(true);
    setShowLogin(false);
  };

  useEffect(()=>{
    let username = cookies.get("username");

    if(username){setUserLogged(true);}
    else{setUserLogged(false);}

  });


  return (


    <div className="App">
      
      <Header/>


    {!userLogged? 
    (
      <div className='userBar'>
      <button className='loginBtn' onClick={handlerClickLogin}>LOGIN</button>
      <button className='signupBtn' onClick={handlerClickSignup}>SIGNUP</button>
      </div>
    )
    :
    (
      
        <div className='userBar'>
        <p className='helloMsg'>hello {cookies.get("username")}</p>
        <TaskBar/>
        </div>


    ) 
    }


    {!showLogin?(null):(<Login/>)}
    {!showSignup?(null):(<Signup/>)}

    </div>
  );
}

export default App;
