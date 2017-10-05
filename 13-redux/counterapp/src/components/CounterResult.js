import React from 'react'
import { connect } from 'react-redux'



class CounterResult extends React.Component {



  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.newCount}</p>
      </div>
    )
  }
}


// DO I NEED A STATE VALUE? THEN MAPSTATETOPROPS

function mapStateToProps(state) {
  return {
    newCount: state.count
  }

}

// export default CounterResult
export default connect(mapStateToProps)(CounterResult)
