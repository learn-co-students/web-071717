import React from 'react'
import BookItem from './BookItem'
import { Grid } from 'semantic-ui-react'
import BooksSearch from './BooksSearch'

class BooksList extends React.Component {


  state = {
    books: []
  }


  componentDidMount() {
    console.log("MOUNTING BOOKSLIST")
  }




  render() {
    console.log("RENDERING BOOKSLIST")
    const bookItems = this.props.books.map((book, index) => {

      return <Grid.Column width={2} key={index}><BookItem key={index} id={index} book={book} onRemove={this.props.onRemove} onAddToCart={this.props.onAddToCart}/></Grid.Column>
    })

    return (
      <div>
        <BooksSearch onSearch={this.props.onSearch} isSearching={this.props.isSearching}/>
        <div style={{"paddingTop": '10px'}}>
          <Grid>
            <Grid.Row>


                {bookItems}

            </Grid.Row>
          </Grid>
        </div>
      </div>

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
