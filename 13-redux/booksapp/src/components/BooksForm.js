import React from 'react'
import { Input, Icon } from 'semantic-ui-react'

class BooksForm extends React.Component {

  constructor() {
    super()
    this.state = {
      inputTitle: "",
    }


  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.inputTitle)
    this.props.addBook(this.state.inputTitle)
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


export default BooksForm