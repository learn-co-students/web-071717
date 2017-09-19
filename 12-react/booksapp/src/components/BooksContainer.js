import React from 'react'
import BooksList from './BooksList'
import BooksForm from './BooksForm'

class BooksContainer extends React.Component {

    state = {
      books: [{id: 1, title:"The Count of Monte Cristo", genre:"Suspense"}, {id:2, title:"The Three Musketeers", genre:"Action & Adventure"}]
    }


  addBook = (book) => {

    const new_id = this.state.books[this.state.books.length-1] ? this.state.books[this.state.books.length-1].id + 1 : 1
    const newBook = Object.assign({}, book, {id: new_id})

    const newBooks = [...this.state.books, newBook]
    this.setState({
      books: newBooks
    })
  }


  removeBook = (title) => {
    const filteredBooks = this.state.books.filter((book) => book.title !== title)
    this.setState({
      books: filteredBooks
    })
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
        <BooksForm onAdd={this.addBook}/>
        <BooksList books={this.state.books} onRemove={this.removeBook}/>
        { this.state.books.length !== 0 ? <button onClick={this.handleClick}>Delete All Books</button> : null }

      </div>
    )
  }
}

export default BooksContainer
