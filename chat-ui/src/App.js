import React, { useState } from 'react';
import SockJsClient from 'react-stomp';
import './App.css';

import Input from './components/Input/Input';
import LoginForm from './components/LoginForm';
import Messages from './components/Messages/Messages';
import chatAPI from './services/chatapi';
import { randomColor } from './utils/common';



import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react'







const SOCKET_URL = 'http://localhost:8080/ws-chat/';

const App = () => {




  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)

  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    console.log('New Message Received!!', msg);
    setMessages(messages.concat(msg));
  }

  let onSendMessage = (msgText) => {
    chatAPI.sendMessage(user.username, msgText).then(res => {
      console.log('Sent', res);
    }).catch(err => {
      console.log('Error Occured while sending message to api');
    })
  }

  let handleLoginSubmit = (username) => {
    console.log(username, " Logged in..");

    setUser({
      username: username,
      color: randomColor()
    })

  }

  return (

    <div className="App">
    
    <Container className="main">
       <Navi/>
       <Dashboard fixed="top"/>
    </Container>    
  </div>


   
  )
}

export default App;
