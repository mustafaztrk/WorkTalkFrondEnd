import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
     <Menu.Item>
        <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/57284119?v=4"/>
        <Dropdown pointing="top left" text='Mustafa'>
            <Dropdown.Menu>
                <Dropdown.Item text="İnfo" icon="info" />
                <Dropdown.Item onClick={props.signOut} text="Sing Out" icon="sign-out" />
                <Dropdown.Item  text="Admin" icon="root" />
            </Dropdown.Menu>
        </Dropdown>
     </Menu.Item>
    </div>
  )
}
