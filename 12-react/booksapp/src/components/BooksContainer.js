import React from 'react'
import BooksList from './BooksList'
import BooksForm from './BooksForm'
import { fetchBooks } from '../services/books'

class BooksContainer extends React.Component {



    state = {
      books: []
    }




  componentDidMount() {
    console.log("Mounting Books Container", this.state.books)
    fetchBooks("suspense")
      .then((json) => {
        this.setState({ books: json.items})
      })
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
    const filteredBooks = this.state.books.filter((book) => book.volumeInfo.title !== title)
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
    console.log("RENDERING BOOKSCONTAINER", this.props)

    const bookid = this.props.match.params.id


      console.log(this.state.books)
      const booksToShow = bookid && this.state.books.length > 0 ? [this.state.books[bookid-1]] : this.state.books
      console.log(bookid)
      console.log(booksToShow)

    return (
      <div>
        <BooksForm onAdd={this.addBook}/>
        <BooksList books={booksToShow} onRemove={this.removeBook}/>
        { this.state.books.length !== 0 ? <button onClick={this.handleClick}>Delete All Books</button> : null }

      </div>
    )
  }
}

export default BooksContainer
