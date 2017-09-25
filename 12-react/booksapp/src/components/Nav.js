import React from 'react'
import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {
  render() {
    return (
      <Menu secondary>
        <Menu.Item name='messages'  />
        <Menu.Item name='friends' />
        <Menu.Menu position='right'>
          
          <Menu.Item name='logout' />
        </Menu.Menu>
      </Menu>
    )
  }
}


export default Nav
