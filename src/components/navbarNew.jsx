import React,{memo} from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomePage from './apiFetchnew'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { LoginCheck } from './userContext'

import Login from './login'

function Nav(){

    const navigate = useNavigate();
    const[search,setSearch]=useState("")
    const login=window.sessionStorage.getItem('login')
    const {username,setUsername}=useContext(LoginCheck)
    
   
    useEffect(()=>{
      if(!login)
      navigate("/")
    },[login])


       return (
       <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Application</a>
       
        
<form className="d-flex" role="search">
  <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
        setSearch(e.target.value)
       }
       }/>
 
</form>
<Link className="navbar-cart" to="/cart">Cart</Link>
<Link to="/">
<button type="button" className="btn btn-primary" onClick={()=>{sessionStorage.clear();}}>{username}: Signout</button></Link>
</div>

        </nav>
        
        <HomePage search={search} setSearch={setSearch}/>
        </div>
    );
}
export default memo(Nav)