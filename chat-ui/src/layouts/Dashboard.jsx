import React from 'react'
import Navi from './Navi'
import Categories from './Categories'


import { Grid, Image } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import UserDetail from '../pages/UserDetail'
import { ToastContainer } from 'react-toastify'
import test from './test'
import { useHistory } from 'react-router'
import Home from './Home'
import UserRegistration from './UserRegistration'
import Statu from './Statu'
import UserAdd from '../pages/UserAdd'
import UserLogin from '../pages/UserLogin'
import UserList from '../pages/UserList'
import Loding from './Loding'
import MessageList from '../pages/MessageList'

export default function Dashboard() {
  const history = useHistory()


  function aaa() {

    history.push("/test")
  }
  function home() {

    history.push("/")
  }
  function users() {

    history.push("/users")
  }
 

  return (
    <div>
      <Grid>
        <ToastContainer position="bottom-right" />
        <Grid.Row>
          
          <Grid.Column width={4}>
         
            <Categories signIn={aaa} home={home} users={users} />

          </Grid.Column>
          
          <Grid.Column width={12}>

            <Route exact path="/" component={Home} />
    
            <Route exact path="/test" component={test} />
            <Route exact path="/UserRegistration" component={UserRegistration} />
            <Route exact path="/aboog" component={Statu} />
            <Route exact path="/user/add" component={UserAdd} />
            <Route exact path="/user/login" component={UserLogin} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/users/:name" component={UserDetail} />
            <Route exact path="/loding" component={Loding} />
            <Route exact path="/admin/messageList" component={MessageList} />
          </Grid.Column>

        </Grid.Row>
        
      </Grid>


    </div>
  )
}
