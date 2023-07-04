
import './App.css';
import Search from './components/Search'
import List from './components/List'
import { Component } from 'react';
export default class App extends Component {
    render () {
    
    return (
      <div className="App">
        <div className="container">
          <Search/>
          <List/>
        </div>
      </div>
    );
  }
}


