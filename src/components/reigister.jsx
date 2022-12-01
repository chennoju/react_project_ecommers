import axios from 'axios'
import React, { memo } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = memo(() => {
    const user={fname:"",lname:"",email:"",password:"",phonenumber:"",gender:""}
    const[state,setState]=useState(user)
    const navigator=useNavigate()
      
     function insert(event){
        console.log(state)
          axios.post("http://localhost:8080/users",state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
       navigator("/")
    }
  return (
    
    <>
<h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={insert} className="p-3 mb-2 bg-success text-white">

            
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" value={state.fname} className="form-control form-control-lg" onChange={(e)=>setState({...state,fname:e.target.value})} required/>
                    <label className="form-label">First Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" value={state.lname} className="form-control form-control-lg" onChange={(e)=>setState({...state,lname:e.target.value})} required/>
                    <label className="form-label">Last Name</label>
                  </div>

                
              


           
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>
          
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"  id="femaleGender"
                     onClick={(e)=>setState({...state,gender:"female"})} required/>
                    <label className="form-check-label" >Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"  id="maleGender"
                    onClick={(e)=>setState({...state,gender:"male"})} required/>
                    <label className="form-check-label" >Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"  id="otherGender"
                      onClick={(e)=>setState({...state,gender:"other"})} required/>
                    <label className="form-check-label">Other</label>
                  </div>

                </div>
              
             
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" value={state.email} className="form-control form-control-lg"  onChange={(e)=>setState({...state,email:e.target.value})} required/>
                    <label className="form-label" >Email</label>
                  </div>

                </div>
                </div>
                    <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" value={state.password} className="form-control form-control-lg"  onChange={(e)=>setState({...state,password:e.target.value})} required/>
                    <label className="form-label" >Password</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" value={state.phonenumber} className="form-control form-control-lg"  onChange={(e)=>setState({...state,phonenumber:e.target.value})} required/>
                    <label className="form-label">Phone Number</label>
                  </div>

                </div>
            
              

              <div className="mt-4 pt-2">
                <button className="btn btn-primary btn-lg" type="submit">submit</button>
              </div>

            </form>
    </>
  )
})

export default Register