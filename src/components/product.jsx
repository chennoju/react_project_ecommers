import axios from 'axios'
import React, { memo } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import NavExternal from './navBar'
import { LoginCheck } from './userContext'


const ProductPage = memo(() => {
    const [product,setProduct]=useState([])
    const {id}=useParams()
    const {user_id}=useContext(LoginCheck)
    
    function getData(){
        axios
        .get("https://dummyjson.com/products/"+id)
        .then(res=>{
          setProduct(res.data)
        }).catch(error=>{
            console.log(error)
        })
    
    }

   
    
    function addCart(fid){
        
        const data={"cart_id":fid}
       axios.post("http://localhost:8080/users/"+user_id+"/cart",data)
       .then(response=>{
        console.log(response)
        alert("added sucessfull")
       }).catch(error=>{
        alert("already in cart")
        console.log(error)
       })
    
    }
        
    useEffect(getData, [id]);
    

  return (<>    <NavExternal/>
    <div className="container mt-10 mb-10">
    <div className="row d-flex justify-content-center">
        <div className="col-md">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={product.thumbnail} width="250" alt=""/> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.brand}</span>
                                <h5 className="text-uppercase">{product.title}</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">{product.price}$</span>
                                <br></br>
                                    <div className="ml-2"> <small className="dis-price">discountPercentage</small> <span>{product.discountPercentage}</span> </div>
                                </div>
                            </div>
                            <p className="about">{product.description}</p>
                         
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={()=>{addCart(product.id)}}>Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>

  )
})

export default ProductPage