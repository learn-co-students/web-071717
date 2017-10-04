import React from 'react'
import { List, Header, Button} from 'semantic-ui-react'

class Cart extends React.Component {

  handleClearCart = () => {
    this.props.onClearCart()
  }
  render() {
    console.log(this.props)
    const cartItems = this.props.cart.map((item, index) => <List.Item key={index}>{item.volumeInfo.title}</List.Item>)
    return (
      <div>
        <Header size="medium">Cart</Header>
        <List>
          {cartItems}
        </List>
        <Button onClick={this.handleClearCart}>Clear Cart</Button>

      </div>
    )
  }
}


export default Cart
