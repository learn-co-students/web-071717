import React from 'react'
import BookItem from './BookItem'
import { Grid } from 'semantic-ui-react'

class BooksList extends React.Component {


  render() {
    const bookItems = this.props.books.map((book, index) => {

      return <Grid.Column key={index}><BookItem key={index} book={book} onRemove={this.props.onRemove}/></Grid.Column>
    })

    return (
      <Grid columns={4} divided>
        <Grid.Row>

            {bookItems}

        </Grid.Row>
      </Grid>

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
