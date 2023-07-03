
import './App.css';
import Search from './components/Search'
import List from './components/List'
import { Component } from 'react';
export default class App extends Component {
  
  state = {
    users:[],
    isFirst:true, //first time open the page
    isLoading:false,
    err:'' //save request err message
  } //ini state 

 updateAppState = (stateObj)=>{
  this.setState(stateObj)
 }

  render () {
    
    return (
      <div className="App">
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state} />
        </div>
      </div>
    );
  }
}


