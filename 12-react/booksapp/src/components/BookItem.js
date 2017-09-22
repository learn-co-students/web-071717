import React from 'react'


//
//
//   const handleButtonClick = () => {
//     props.onRemove(props.book.title)
//   }
//   return <li>{props.book.id} - {props.book.genre} - {props.book.title} <button onClick={handleButtonClick}>X</button></li>
// }


//
//
class BookItem extends React.Component {
  componentWillUnmount() {
  }
  handleButtonClick = () => {
    this.props.onRemove(this.props.book.volumeInfo.title)
  }
  render() {
    return (<li>{this.props.book.volumeInfo.title} <button onClick={this.handleButtonClick}>X</button></li>)
  }
}
export default BookItem
