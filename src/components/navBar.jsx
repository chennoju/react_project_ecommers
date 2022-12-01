import React,{memo} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { LoginCheck } from './userContext'

import Login from './login'

function NavExternal(){

    const navigate = useNavigate();
    const login=window.sessionStorage.getItem('login')
    const {username,setUsername}=useContext(LoginCheck)
    
   
    useEffect(()=>{
        console.log(username)
      if(!login)
      navigate("/")
    },[login])


       return (
       <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">Application</a>
            <Link className="navbar-home" to="/home">Home</Link>
            <Link className="navbar-cart" to="/cart">Cart</Link>
       
<Link to="/">
<button type="button" className="btn btn-primary" onClick={()=>{sessionStorage.clear(); setUsername("")}}>{username}: Signout</button></Link>
</div>

        </nav>
        </div>
    );
}
export default NavExternal