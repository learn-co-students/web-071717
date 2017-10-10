import React from 'react'
import { Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchBooks } from '../actions/books'

class BooksForm extends React.Component {

  constructor() {
    super()
    this.state = {
      inputTitle: "",
    }


  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchBooks(this.state.inputTitle)
    this.setState({
      inputTitle: "",
    })

  }

  handleInputSearch = (event) => {

    this.setState({
      inputTitle: event.target.value
    })
  }


  render() {
    return (
      <div>

      <Input loading={this.props.isSearching} onChange={this.handleInputSearch}
        icon={<Icon onClick={this.handleSubmit} name='plus' inverted circular link />}
        placeholder='Add Book...'
      />
      </div>
    )
  }
}




function mapDispatchToProps(dispatch) {
  return {
    searchBooks: (title) => {
      dispatch(searchBooks(title))
    }
  }
}

export default connect(null, mapDispatchToProps)(BooksForm)
