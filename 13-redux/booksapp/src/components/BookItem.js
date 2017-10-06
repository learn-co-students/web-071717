import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeBook } from '../actions/books'

class BookItem extends React.Component {

  
  handleTrash = (event) => {
    this.props.remove(this.props.book.id)
  }
  
  handleAddCart = () => {
    
  }
  
  render() {
    console.log(this.props)
    const { book } = this.props
    return (
      <div>
        <Card>

          { book ? <Image src={book.thumbnail} /> : null }
          <Card.Content>
            <Card.Header>
              <Link to={"/books/" + book.id}>{book.title}</Link>
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

function mapDispatchToProps(dispatch) {
  const newProps =  {
    remove: (id) => {
      dispatch(removeBook(id))
    }
  }
  return newProps
}



export default connect(null, mapDispatchToProps)(BookItem)
