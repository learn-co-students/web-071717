import React from 'react'
import { Input, Icon } from 'semantic-ui-react'



class BooksSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      inputTitle: "",
    }


  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.inputTitle)
    this.props.onSearch(this.state.inputTitle)
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
        icon={<Icon onClick={this.handleSubmit} name='search' inverted circular link />}
        placeholder='Search...'
      />
      </div>
    )
  }
}


export default BooksSearch
