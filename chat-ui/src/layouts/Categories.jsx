import React from 'react'
import { Menu } from 'semantic-ui-react'
import DateLabel from './DateLabel'

import { Link } from 'react-router-dom'


export default function Categories({ signIn,home,users }) {
  return (
    <div>
      
      <Menu pointing vertical inverted fixed='left'>
      
        <Menu.Item

        
        />
        
        <Menu.Item


        />
        <DateLabel value={new Date().toDateString()} />
        <Menu.Item


        />
        
        <Menu.Item
        onClick={home}
          name='home'

        />
        <Menu.Item
          onClick={signIn}
          name='messages'

        />
        <Menu.Item
        onClick={users}
          name='Users'

        />
      </Menu>
    </div>
  )
}
