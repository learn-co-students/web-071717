import React from 'react'
import { loginUser } from '../services/user'
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Clicking Button", this.state.username, this.state.password)
    // send some api call to the backend
    // clear fields

    const loginParams = { username: this.state.username, password: this.state.password}
    loginUser(loginParams)
      .then((user) => {
        console.log("SETTING STORAGE")
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          username: "",
          password:""
        })
      })




  }


  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }


  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })

  }
  render() {

    console.log("RENDERING")
    // ARE WE LOGGED IN
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/books"/>
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
          <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          <input type="submit" value="Submit"/>
        </form>
      )

    }


  }
}

export default LoginForm
