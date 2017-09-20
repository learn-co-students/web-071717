import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BooksContainer from './components/BooksContainer'

class App extends Component {



  render() {
    console.log("RENDERING APP")
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
          <BooksContainer/>
      </div>
    );
  }

  componentWillMount() {
    console.log("WILL MOUNT APP")
  }


  componentDidMount() {
    console.log("DID MOUNT APP")
  }
}

export default App;
