import React from 'react'

const BookItem = (props) => {


  const handleButtonClick = () => {
    props.onRemove(props.book.title)
  }
  return <li>{props.book.id} - {props.book.genre} - {props.book.title} <button onClick={handleButtonClick}>X</button></li>
}


//
//
// class BookItem extends React.Component {
//   handleButtonClick = () => {
//     this.props.onRemove(this.props.book.title)
//   }
//   render() {
//     return (<li>{this.props.book.id} - {this.props.book.title} <button onClick={this.handleButtonClick}>X</button></li>)
//   }
// }
export default BookItem
