import React from 'react'


function HOC(RenderedComponent, props) {
  return class extends React.Component {


    componentDidMount() {

    }
    render() {
      if (props.shouldRender) {
        return <RenderedComponent {...this.props} {...props}/>
      } else {
        return <p>Not allowed to see component</p>
      }

    }
  }
}

export default HOC
