import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className="ui secondary menu">
        <NavLink activeClassName="active" className="item" to="/books">Books</NavLink>
        <NavLink className="item right" to="/logout">Logout</NavLink>
      </div>
    )
  }
}


export default Nav
