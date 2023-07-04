import React, { Component } from 'react'
import PubSub from 'pubsub-js';
export default class List extends Component {
    state = {
        users:[],
        isFirst:true, //first time open the page
        isLoading:false,
        err:'' //save request err message
      } //ini state 

      componentDidMount(){
        this.token = PubSub.subscribe('msg',(_,stateObj)=>{
            this.setState(stateObj)
        })
      }
      componentWillUnmount(){
        PubSub.unsubscribe(this.token)
      }
    
  render() {
    const {users,isFirst,isLoading,err} = this.state;
    return (
        <div className="row">     
            {
                isFirst ? <h2>Enter Keyword, and click search butten</h2>:
                isLoading ? <h2>Loading,please wait</h2>:
                err ? <h2 style={{color:'red'}}>{err}</h2>:
                (users.length===0)?<h2>No result, Please try another keyword</h2>:
                users.map((userObj)=>{
                    return (
                        <div key={userObj.id}className="card">
                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                <img alt="headpic" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
      </div>
    )
  }
}
