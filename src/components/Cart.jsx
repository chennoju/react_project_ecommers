import axios from 'axios'
import React, { memo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import NavExternal from './navBar'
import { LoginCheck } from './userContext'

const Cart = memo(() => {
    


    const {user_id,setUser_id}=useContext(LoginCheck)
    const [cart,setCart]=useState([])
    
     function getData(){
        axios.get("http://localhost:8080/users/"+user_id+"/cart").
        then(response=>{
            setCart(prev=>{return setCart(response.data)})
          
        }).catch(error=>{
            console.log(error)
        })
    }
  
  
    function deleteCart(item_id){
        axios.delete("http://localhost:8080/user/"+user_id+"/cart/"+item_id)
        .then(response=>{
            console.log(response)
            alert("removed sucessfull")
        }).catch(error=>{
            console.log(error)
        })

    }
  
    useEffect(getData, [])
  


  return (
    <>
       <NavExternal/>
    <div>
        <div className="container bg-white rounded-top mt-5" id="zero-pad">
    <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-12 pt-3">
            <div className="d-flex flex-column pt-4">
                <div><h5 className="text-uppercase font-weight-normal">CART</h5></div>
                <div className="font-weight-normal">{cart?.length} items</div>
            </div>
            <div className="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
                <div className="px-lg-5 mr-lg-5" id="produc">PRODUCTS</div>
                <div className="px-lg-5 ml-lg-5" id="prc">Type</div>
                <div className="px-lg-5 ml-lg-5" id="prc">PRICE</div>
                <div className="px-lg-5 ml-lg-3" id="total">TOTAL</div>
            </div>
   
            {
        cart?.length?cart.map(item=>
        
       
            <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile" key={item.id}>
                <div className="d-flex flex-row align-items-center">
                    <div><img src={item.images[0]} width="150" height="150" alt="" id="image"/></div>
                    <div className="d-flex flex-column pl-md-3 pl-1">
                        <div><h6>{item.brand}</h6></div>
                        <div >{item.title}</div>
                       
                    </div>                    
                </div>
                <div className="pl-md-0 pl-1"><b>{item.category}</b></div>
                <div className="pl-md-0 pl-1"><b>${item.price}</b></div>
              
             
                <button className="close"  onClick={()=>{deleteCart(item.id)}}>X</button>
            </div>):<h1>no data</h1>}
            
        </div>
    </div>
</div>
    </div>
    </>
  )
})

export default Cart