import React from 'react'
import BooksList from './BooksList'
import BookDetail from './BookDetail'
import BooksForm from './BooksForm'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Grid, List} from 'semantic-ui-react'

class BooksContainer extends React.Component {



  state = {
    books: [
      {id: 1, title: "Count of Monte Cristo", thumbnail: ""},
      {id: 2, title: "The Three Musketeers", thumbnail: ""},
      {id: 3, title: "JavaScript the definitive guide", thumbnail: ""},
      {id: 4, title: "Full Stack React", thumbnail: ""},  
    ]
  }


  addBook = (title) => {
    debugger;
    const new_id = this.state.books[this.state.books.length-1] ? this.state.books[this.state.books.length-1].id + 1 : 1
    const newBook = {title, id: new_id}

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


  render() {
  
      return (
          <div>
          
            <Grid>
              <Grid.Column width={16}>
                <BooksForm addBook={this.addBook}/>
                <Route exact path="/books" render={(props) => <BooksList books={this.state.books} onRemove={this.removeBook} {...props}/>}/>

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