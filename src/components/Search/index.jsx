import React, { Component } from 'react'
import axios from 'axios'
export default class index extends Component {
    search=()=>{
        //get user's input
        const {value:keyword}=this.keyWordElement;  
        //send network request
        axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
            response=>{console.log('successful',response.data);},
            error=>{console.log('error',error)}
        )
    }
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
      </section>
    )
  }
}
