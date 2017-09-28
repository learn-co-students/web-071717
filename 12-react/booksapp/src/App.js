import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import BooksContainer from './components/BooksContainer'
import Nav from './components/Nav'
import Cart from './components/Cart'
import { Route, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { loginUser, logoutUser } from './services/user'
import HOC from './components/Hoc'
import Home from './components/Home'
import Authorize from './components/Authorize'

class App extends Component {


  // hmm maybe state should have a user

  state = {
    cart: [],
    user: {},
    isLoggedIn: false
  }



  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })

  }

  logout = () => {

    logoutUser()
    this.setState({
      user: null,
      isLoggedIn: false
    })
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


      const NewHome = HOC(Home, this.state.user)
      const AuthBooksContainer = Authorize(BooksContainer)
      const AuthLoginForm = Authorize(LoginForm)
      return (
        <div className="App">
          <NewHome show={true} user={this.state.user}/>

          <Route path="/" component={Nav}/>

          <Route path="/cart" render={(props) => <Cart {...props} cart={this.state.cart}/>}/>
          <Route path="/login" render={(props) => <AuthLoginForm onLogin={this.login} {...props} />}/>
          <Route path="/books" render={(props) => <AuthBooksContainer cart={this.state.cart} addToCart={this.addToCart} onClearCart={this.clearCart} {...props} /> } />


        </div>
      );
  }

}


export default App;
