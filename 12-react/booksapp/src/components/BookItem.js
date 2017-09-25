import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
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




    return (
      <div>
        <Card>

          { book.volumeInfo.imageLinks ? <Image src={book.volumeInfo.imageLinks.thumbnail} /> : null }
          <Card.Content>
            <Card.Header>
              <Link to={"/books/" + this.props.id}>{book.volumeInfo.title}</Link>
            </Card.Header>

          </Card.Content>
          <Card.Content extra>
            <Icon onClick={this.handleButtonClick} name="shopping basket"/>
          </Card.Content>

        </Card>


      </div>


    )
  }
}



export default BookItem
