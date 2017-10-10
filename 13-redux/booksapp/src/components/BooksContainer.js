import React from 'react'
import BooksList from './BooksList'
import BookDetail from './BookDetail'
import BooksForm from './BooksForm'
import { addBook, removeBook } from '../actions/books'
import * as BookActions from '../actions/books'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Grid, List} from 'semantic-ui-react'


class BooksContainer extends React.Component {


  render() {
      return (
          <div>

            <Grid>
              <Grid.Column width={16}>
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






export default BooksContainer
