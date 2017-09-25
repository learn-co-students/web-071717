import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import BooksContainer from './components/BooksContainer'
import Nav from './components/Nav'
import Cart from './components/Cart'
import { Route } from 'react-router-dom'
class App extends Component {



  state = {
    cart: []
  }



  addToCart = (book) => {
    console.log(book)

    this.setState({
      cart: [...this.state.cart, book]
    })
  }


  render() {

    return (
      <div className="App">

        <Route path="/" component={Nav}/>
        <Route path="/cart" render={(props) => <Cart {...props} cart={this.state.cart}/>}/>

        <BooksContainer cart={this.state.cart} addToCart={this.addToCart} onClearCart={this.clearCart} />


      </div>
    );
  }

}


export default App;
