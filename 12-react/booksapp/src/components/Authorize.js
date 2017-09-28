import React from 'react'
import { Redirect } from 'react-router-dom'


function Authorize(RenderedComponent, props) {
  return class extends React.Component {

    // componentDidMount() {
    //   if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/login") {
    //     this.props.history.push('/books')
    //     // I am logged in
    //   } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== "/login") {
    //
    //     this.props.history.push('/login')
    //     // not logged in
    //   } else {
    //
    //   }
    // }
    render() {

      if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/login") {
        return <Redirect to="/books" />

        // I am logged in
      } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname !== "/login") {

        return <Redirect to="/login" />
        // not logged in
      } else {
        return (
          <RenderedComponent {...this.props} {...props}/>
        )
      }

    }
  }
}

export default Authorize
