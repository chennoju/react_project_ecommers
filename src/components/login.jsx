import {Link} from 'react-router-dom';
import React, {useEffect } from 'react';
import { useState,useContext,memo } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginCheck } from './userContext'
import axios from 'axios';
function Login(){
    const  userinput=React.createRef()
    const password=React.createRef()
    const navigate = useNavigate();
    const {username,setUsername,user_id,setUser_id}=useContext(LoginCheck)
    const login=window.sessionStorage.getItem('login')
    const [data,setData]=useState({data:""})

      function handleSubmit(event){
      console.log(userinput.current.value)
       axios.get("http://localhost:8080/users/email/"+userinput.current.value)
      .then(response=>{
        console.log(password.current.value)
        if(response.data.password===password.current.value){
        window.sessionStorage.setItem('login',true)
        window.sessionStorage.setItem('username',response.data.fname)
        window.sessionStorage.setItem('user_id',response.data.id)
        setUsername(window.sessionStorage.getItem('username'))
        setUser_id(window.sessionStorage.getItem('user_id'))
        
      }
        else
        alert("wrong")
        
      }).catch(error=>{
        console.log(error)
      })
  
      event.preventDefault()//dont refresh the page
    }  




 useEffect(()=>{
  if(login)
  navigate("/home")
 },[])



   useEffect(() => {
      userinput.current.focus()
     password.current.focus()
   }, [ userinput,password])

        
          return (

            <center>
              
            <h1>Login</h1>
            
            <form onSubmit={(e)=> handleSubmit(e)}>

                <div>
                <label>Email    </label> &nbsp;
            <input type="text" ref={  userinput}></input>
            <br/>
            <br/>
            <label>Password</label>
            <input type="password" ref={ password}></input>
            </div>
            <br></br>
            <br></br>
            <button type="submit">submit</button>
            </form>
            <br></br>
            <Link to="signup">signup</Link>
            </center>
        );

    }

 
export default memo(Login);