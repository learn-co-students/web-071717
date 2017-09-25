import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class BookItem extends React.Component {
  componentWillUnmount() {
  }
  handleButtonClick = () => {

    this.props.onAddToCart(this.props.book)
    //this.props.onRemove(this.props.book.volumeInfo.title)
  }
  render() {
    const { book } = this.props

    const extraCardDetails = (
      <div>
        <Icon onClick={this.handleButtonClick} name="shopping basket"/>
        <Link to={"/books/" + this.props.id}>See Details</Link>
      </div>
    )


    return (
      <Card
        image={book.volumeInfo.imageLinks.thumbnail}
        header={book.volumeInfo.title}
        description={book.volumeInfo.description ? book.volumeInfo.description.slice(0,100) + "..." : ""}
        extra={extraCardDetails}
      />
    )
  }
}



export default BookItem
