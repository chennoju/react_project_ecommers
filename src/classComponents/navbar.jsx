import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiFetch from '../classComponents/apiFetch';

class Navbar extends Component {
   constructor(props){
    super(props)
    this.state={
        username:"abhinav",
        search:""
    }
   }
   userHandler =(event)=>{
    this.setState({
        search:event.target.value.toLowerCase()
    });
   }
    render() { 

        return (<div>
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Application</a>
           
            
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.userHandler}/>
     
    </form>
   <Link to="/">
    <button type="button" className="btn btn-primary">{this.state.username}: Signout</button></Link>
  </div>
  
            </nav>
            <ApiFetch searchAtibute={this.state.search}/>
            </div>
        );
    }
}
 
export default Navbar;