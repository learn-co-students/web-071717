import React from 'react'
import ReactDOM from 'react-dom'



const FirstComponent = React.createClass({
  render: function() {
    return (
      <p>Hello World</p>
    )
  }
})





ReactDOM.render(<FirstComponent/>, document.getElementById('root'))
