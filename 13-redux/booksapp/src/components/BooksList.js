import React from 'react'
import BookItem from './BookItem'
import { Grid } from 'semantic-ui-react'


const BooksList = (props) => {
  const bookItems = props.books.map((book, index) => {
    return <BookItem key={index} book={book}/>
  })
  return (
    <Grid>
      <Grid.Row>
          {bookItems}
      </Grid.Row>
    </Grid>
  )
}

export default BooksList
