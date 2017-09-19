import React from 'react'



class BooksForm extends React.Component {

  constructor() {
    super()
    this.state = {
      inputTitle: "",
      inputGenre: ""
    }


    // sum += 1
    // sum = sum + 1

    //this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()


    if (this.state.inputTitle !== "" && this.state.inputGenre !== "") {
      const newbook = { title: this.state.inputTitle, genre: this.state.inputGenre }
      this.props.onAdd(newbook)
    }

    this.setState({
      inputTitle: "",
      inputGenre: ""
    })
    /// when I click submit I have to get the value from the input field and then do something
    ///

  }

  handleTitleInputChange = (event) => {
    this.setState({
      inputTitle: event.target.value
    })
  }

  handleGenreInputChange = (event) => {
    this.setState({
      inputGenre: event.target.value
    })

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="title"  name="title" onChange={this.handleTitleInputChange} value={this.state.inputTitle}/>
        <input type="text" placeholder="genre" onChange={this.handleGenreInputChange} value={this.state.inputGenre}/>
        <input type="submit" value="Add Book"/>
      </form>
    )
  }
}


export default BooksForm
