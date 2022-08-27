import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn}><Link color='silver' to={`/user/login`}>Login</Link></Button>
        <Button  style={{marginLeft:"0.5em"}}><Link color='silver' to={`/user/add`}>  Sing In</Link></Button>
      </Menu.Item>
    </div>
  )
}
