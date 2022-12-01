import React, { Component,memo } from 'react'
import axios from 'axios' 

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'

import {useNavigate} from "react-router-dom"


function HomePage({search,setSearch}){

    const [posts,setPosts]=useState([])
    const navigate=useNavigate()
    const style={
        width: 250,
        padding:10,
    }

    function getData(){
      axios
      .get("https://dummyjson.com/products")
      .then(res=>{
        setPosts(res.data.products)
      })}          


      function toProduct(id){
        navigate("/home/"+id)
      }          



    useEffect(getData, []);
    return(
        <div className="container text-center">
        <div className="row row-cols-3">
        {
            
            posts?.length?
            posts.filter((val)=>{
              if(search===""){
                return val}
              else if(val.title.toLowerCase().includes(search))
              return val
            }).map(post=>
                <div className="container text-center"  key={post.id} style={style}>
                <img className="card-img-top" src={post.thumbnail} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="font-weight-bold">Description  :{post.description}</p>
                  <p className="font-weight-bold">Price  :{post.price}</p>
                
                  <button className="btn btn-primary" onClick={()=>toProduct(post.id)}>open</button>
                </div>
                
              </div>
                ):null
        }
      </div>
      </div>

    )
    
}
export default memo(HomePage)