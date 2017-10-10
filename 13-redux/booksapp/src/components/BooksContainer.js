import React from 'react'
import BooksList from './BooksList'
import BookDetail from './BookDetail'
import BooksForm from './BooksForm'
import { addBook, removeBook, fetchBooks } from '../actions/books'
import * as BookActions from '../actions/books'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'



class BooksContainer extends React.Component {

  componentDidMount() {

    this.props.fetchBooks()

  }


  render() {
      console.log("RENDERING", this.props.books)
      return (
          <div>

            <Grid>
              <Grid.Column width={16}>
                <Loader active={this.props.isFetching} inline />
                <BooksForm/>
                <Route exact path="/books" render={(props) => <BooksList books={this.props.books} {...props} />}/>

                <Route path="/books/:id" render={(routeProps) => {

                    const id = routeProps.match.params.id
                    if (this.state.books.length) {
                      const book = this.state.books[id-1]

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
  return {
    books: state.books.list,
    isFetching: state.books.isFetching

  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: () => {
                /// action creator from './actions/books'
      dispatch(fetchBooks())
    },
    addBook: (title) => {
        // dispatch     /// action creator
      dispatch(addBook(title))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
