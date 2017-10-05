import React from 'react'
import { increment, decrement, clear } from '../actions/counter'
import { connect } from 'react-redux'



class CounterControls extends React.Component {


  handleIncrement = () => {
    this.props.onIncrement()
  }


  handleDecrement = () => {
    console.log("Subtracting")
    this.props.onDecrement()

  }

  handleClear = () => {
    this.props.onClear()
  }


  render() {
    console.log("Counter Controls", this.props)
    return (
      <div>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
        <div>
          <button onClick={this.handleClear}>Clear</button>
        </div>
      </div>
    )
  }
}




// DO I WANT TO CHANGE STATE? YES THEN I NEED MAPDISPATCH

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      console.log("Incrementing")
      dispatch(increment())
    },
    onDecrement: () => {
      console.log("DECREMENTING")
      dispatch(decrement())
    },
    onClear: () => {
      console.log("CLearing")
      dispatch(clear())
    }
  }
}

// mapStateToProps goes first
// mapDispatchToProps goes after

export default connect(null, mapDispatchToProps)(CounterControls)
