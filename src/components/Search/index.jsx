import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    search=()=>{
      
        //get user's input
        const {value:keyword}=this.keyWordElement;
        //updateAppState before sending request
        PubSub.publish('msg',{isFirst:false,isLoading:true})
        //send network request
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response=>{
              //update App state after getting response from server
              PubSub.publish('msg',{isLoading:false, users:response.data.items})
            },
            //update App state after failing to get response from server
            error=>{
              PubSub.publish('msg',{isLoading:false, err:error.message})
              
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
