import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    search=()=>{
        //get user's input
        const {value:keyword}=this.keyWordElement;
        //updateAppState before sending request
      this.props.updateAppState({isFirst:false,isLoading:true})

        //send network request
        axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
            response=>{
              //update App state after getting response from server
              this.props.updateAppState({isLoading:false, users:response.data.items})
            },
            //update App state after failing to get response from server
            error=>{
              this.props.updateAppState({isLoading:false, err:error.message})
            }
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
