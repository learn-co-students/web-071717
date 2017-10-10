import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class BookItem extends React.Component {


  handleTrash = (event) => {
    //i  this.props.removeBook(this.props.book.id)
  }

  handleAddCart = () => {

  }

  render() {
    const { book } = this.props
    return (
      <div>
        <Card>

          { book ? <Image src={book.thumbnail} /> : null }
          <Card.Content>
            <Card.Header>
              <Link to={"/books/" + book.id}>{book.volumeInfo.title}</Link>
            </Card.Header>

          </Card.Content>
          <Card.Content extra>
            <Icon onClick={this.handleTrash} name="trash"/>
            <Icon onClick={this.handleAddCart} name="plus cart"/>
          </Card.Content>

        </Card>


      </div>


    )
  }
}





export default BookItem
