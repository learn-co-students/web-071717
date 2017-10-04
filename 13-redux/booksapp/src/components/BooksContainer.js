import React from 'react'
import BooksList from './BooksList'
import Cart from './Cart'
import BookDetail from './BookDetail'
import { fetchBooks, searchBooks } from '../services/books'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Grid, List} from 'semantic-ui-react'
import { logoutUser } from '../services/user'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BookActions from '../actions/books'
class BooksContainer extends React.Component {



  state = {
    books: [],
    isSearching: false,
    isLoggedIn: false

  }

  componentDidMount() {
    console.log("COMPONENTDIDMOUNTING - BOOKSCONTAINER")
    fetchBooks("suspense")
      .then((json) => {
        this.setState({ books: json.items})
      })
  }


  searchBooks = (title) => {
    this.setState({
      isSearching: true
    })
    searchBooks(title)
      .then((json) => {
        this.setState({books: json.items, isSearching: false})
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

  handleLogout = () => {
    logoutUser()
    // this.props.history.push("/login")
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    console.log(this.props)
    const width = this.props.cart.length == 0 ? 16 : 12


      return (
          <div>
            <button onClick={this.handleLogout}>Log me Out</button>
            <Grid>
              <Grid.Column width={16}>
                <Route exact path="/books" render={(props) => <BooksList books={this.state.books} onRemove={this.removeBook} {...props}  onSearch={this.searchBooks} isSearching={this.state.isSearching} onAddToCart={this.props.addToCart}/>}/>

                <Route path="/books/:id" render={(routeProps) => {
                    const id = routeProps.match.params.id
                    // since i have an id
                    // what do i with it
                    // MORE REASONS I DONT LIKE JAVASCRIPT
                    if (this.state.books.length) {
                      const book = this.state.books[id]
                      return <BookDetail {...book} />
                    } else {
                      return null
                    }
                  }} />
                </Grid.Column>

              </Grid>
          </div>
      )
  }
}



function mapStateToProps(state) {
  console.log(state)
  return {
    booksList: state.books.list

  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(BookActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
