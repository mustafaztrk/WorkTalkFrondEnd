
import React, { useState } from 'react'
import CartSummary from './CartSummary'
import Language from './Language'


import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

import { useHistory } from 'react-router'

import { useSelector } from 'react-redux';

import test from '../pages/UserAdd'
export default function Navi({UserRegistration}) {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()
  const {cartItems} = useSelector(state => state.cart)

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }
 
  return (
    <div>
        
       <Menu inverted  fixed="top" >
        <Container>
          

          <Menu.Menu position="right">
        
            <Language></Language>
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated?<SignedIn  signOut={handleSignOut} bisey="1"/>
            :<SignedOut signIn={handleSignIn}   />}  
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
