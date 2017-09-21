import React from 'react'
import BookItem from './BookItem'

// class BooksList extends React.Component {
//   render() {
//
//
//     const bookItems = this.props.books.map((book, index) => {
//
//       return <BookItem key={index} book={book} onRemove={this.props.onRemove}/>
//     })
//
//     return (
//       <ul>
//         {bookItems}
//       </ul>
//     )
//   }
// }


const BooksList = (props) => {
  const bookItems = props.books.map((book, index) => {
    return <BookItem key={index} book={book} onRemove={props.onRemove}/>
  })
  return (
    <ul>
      {bookItems}
    </ul>
  )
}

export default BooksList
