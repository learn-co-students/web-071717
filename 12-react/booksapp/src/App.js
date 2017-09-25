import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import BooksContainer from './components/BooksContainer'
import Nav from './components/Nav'
import { Grid } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
class App extends Component {



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
  render() {
    console.log("RENDERING APP")
    return (
      <div className="App">
        <Route path="/" component={Nav}/>
        <div className="">

          <h2>Welcome to BooksApp</h2>
        </div>
        <p>Above Books</p>
        <p><a href="/hello">Hello Link</a></p>
        <p><Link to="/hello">Hello Router Link</Link></p>
        <p><Link to="/books">Books</Link></p>

        <Route exact path="/hello" component={HelloWorld}/>
        <Route path="/books" render={() => <BooksContainer books={this.state.books}/>}/>
        <Route path="/books/:id" render={(props) => <BooksContainer {...props}/>} />
        <p>Below Books</p>



      </div>
    );
  }

  componentWillMount() {
    console.log("WILL MOUNT APP")
  }


  componentDidMount() {
    console.log("DID MOUNT APP")
  }
}

class HelloWorld extends React.Component {
  componentDidMount() {
    // usuall do api stuff here
    console.log("Mounting Hello World")
  }
  render() {
    return (
      <p>Hello From Component</p>
    )
  }
}

export default App;
