import React from 'react'

const BookItem = (props) => {
  console.log(this.state)
  return <li>{props.book.id} - {props.book.title}</li>
}

export default BookItem
