import React from 'react'
import { List, Header} from 'semantic-ui-react'

class Cart extends React.Component {
  render() {
    const cartItems = this.props.cart.map((item, index) => <List.Item key={index}>{item.volumeInfo.title}</List.Item>)
    return (
      <div>
      <Header size="medium">Cart</Header>
      <List>
        {cartItems}
      </List>
      </div>
    )
  }
}


export default Cart
