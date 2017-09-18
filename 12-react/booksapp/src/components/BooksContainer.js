import React from 'react'
import BooksList from './BooksList'

class BooksContainer extends React.Component {

    state = {
      books: [{id: 1, title:"The Count of Monte Cristo"}, {id:2, title:"The Three Musketeers"}]
    }



  handleClick = () => {
    console.log("BEFORE CLICK", this.state.books)
    this.setState({
      books: []
    }, () => {
      console.log("AFTER SET STATE", this.state.books)
    })
    console.log("AFTER CLICK", this.state.books)
  }

  render() {
    console.log("RENDERING BOOKSCONTAINER", this.state.books)


    return (
      <div>
        <BooksList books={this.state.books}/>
        { this.state.books.length !== 0 ? <button onClick={(event) => {console.log("Clicking", event)}}>Delete All Books</button> : null }

      </div>
    )
  }
}

export default BooksContainer
