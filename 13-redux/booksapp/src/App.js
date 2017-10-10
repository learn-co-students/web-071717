import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import BooksContainer from './components/BooksContainer'
import UsersContainer from './components/UsersContainer'
import Nav from './components/Nav'
import { Route, Redirect } from 'react-router-dom'





class App extends Component {
  render() {
    return (
      <div className="App">

          <Route path="/" component={Nav}/>
          <Route path="/books" render={(props) => <BooksContainer {...props} /> } />
          <Route path="/users" component={UsersContainer} />

        </div>
    );
  }
}

export default App;
