import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import BooksContainer from './components/BooksContainer'
import Nav from './components/Nav'
import { Route } from 'react-router-dom'
class App extends Component {



  state = {
    cart: []
  }


  addToCart = (book) => {

    this.setState({
      cart: [...this.state.cart, book]
    })

  }


  clearCart = () => {
    this.setState({
      cart: []
    })
  }

  render() {

    return (
      <div className="App">
        <Route path="/" component={Nav}/>
        <BooksContainer cart={this.state.cart} addToCart={this.addToCart} onClearCart={this.clearCart} />


      </div>
    );
  }

}


export default App;
