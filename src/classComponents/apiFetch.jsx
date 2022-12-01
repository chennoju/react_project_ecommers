import React, { Component } from 'react'
import axios from 'axios' 
import 'bootstrap/dist/css/bootstrap.min.css'
class ApiFetch extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://dummyjson.com/products')
        .then(response=>{
            this.setState({posts:response.data.products})
        }).catch(error=>{
            console.log(error)
        })
    } 
  render() {
    const {posts} =this.state
    const search =this.props.searchAtibute
    console.log(search)
    
    const style={
        width: 250,
        padding:10,
    }
    return (
        <div className="container text-center">
        <div className="row row-cols-3">
        {
            
            posts.length?
            posts.filter((val)=>{
              if(search=="")
              return val
              else if(val.title.toLowerCase().includes(search))
              return val
            }).map(post=>
                <div className="container text-center"  key={post.id} style={style}>
                <img className="card-img-top" src={post.thumbnail} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="font-weight-bold">Description  :{post.description}</p>
                  <p className="font-weight-bold">Price  :{post.price}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
                ):
            null
        }
      </div>
      </div>
    )
  }
}
export default ApiFetch