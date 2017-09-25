import React from 'react'
import { Card, Button } from 'semantic-ui-react'


class BookItem extends React.Component {
  componentWillUnmount() {
  }
  handleButtonClick = () => {
    this.props.onRemove(this.props.book.volumeInfo.title)
  }
  render() {
    const { book } = this.props

    return (
      <Card
        image={book.volumeInfo.imageLinks.thumbnail}
        header={book.volumeInfo.title}
        description={book.volumeInfo.description.slice(0,100) + "..."}
        extra={<Button onClick={this.handleButtonClick}>X</Button>}
      />
    )
  }
}
export default BookItem
