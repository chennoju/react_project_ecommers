import {
    Routes,
    Route,
  } from "react-router-dom";

import Login from "./login";
import Nav from "./navbarNew";
import React ,{useState,useMemo}from 'react';
import { LoginCheck } from "./userContext";
import ProductPage from "./product";
import Register from "./reigister";
import Cart from "./Cart";
function Appnew() {

const [username,setUsername]=useState(window.sessionStorage.getItem('username'))
const [user_id,setUser_id]=useState(window.sessionStorage.getItem('user_id'))
const value=useMemo(() => ({username,setUsername,user_id,setUser_id}))

    return(
      <div>
          <LoginCheck.Provider value={value}>
       <Routes>
          
      
            <Route  path="/" element={<Login/>}></Route>
            <Route  path="/home" >
              <Route index element={<Nav/>}/>
            <Route path=":id" element={<ProductPage/>}/>
            </Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/signup" element={<Register/>}/>
            <Route path="*" element={<h1>NotFound</h1>}></Route>
        
        </Routes>
       
        </LoginCheck.Provider> 
     
     
   
     
   
      </div>
    )
   }
   
   export default Appnew;