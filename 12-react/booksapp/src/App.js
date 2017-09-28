import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import BooksContainer from './components/BooksContainer'
import Nav from './components/Nav'
import Cart from './components/Cart'
import { Route, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'

class App extends Component {



  state = {
    cart: [],
    isLoggedIn: false
  }



  logout = () => {
    
  }




  componentDidMount() {
    fetch("http://localhost:3000/welcome")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }



  addToCart = (book) => {
    console.log(book)

    this.setState({
      cart: [...this.state.cart, book]
    })
  }


  render() {
    console.log(this.props)

      // I am logged in
      return (
        <div className="App">

          <Route path="/" component={Nav}/>

          <Route path="/cart" render={(props) => <Cart {...props} cart={this.state.cart}/>}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/books" render={(props) => <BooksContainer cart={this.state.cart} addToCart={this.addToCart} onClearCart={this.clearCart} {...props} /> } />


        </div>
      );
  }

}


export default App;
