import React from 'react'
import BookItem from './BookItem'

class BooksList extends React.Component {



  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props)
  }


  shouldComponentUpdate(nextProps) {
    console.log(nextProps)
    return true
  }


  render() {
    const bookItems = this.props.books.map((book, index) => {

      return <BookItem key={index} book={book} onRemove={this.props.onRemove}/>
    })

    return (
      <ul>
        {bookItems}
      </ul>
    )
  }
}


// const BooksList = (props) => {
//   const bookItems = props.books.map((book, index) => {
//     return <BookItem key={index} book={book} onRemove={props.onRemove}/>
//   })
//   return (
//     <ul>
//       {bookItems}
//     </ul>
//   )
// }

export default BooksList
