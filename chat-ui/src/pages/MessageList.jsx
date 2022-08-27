import React, { useState, useEffect } from 'react'
import { Grid, Image, Label, Segment } from 'semantic-ui-react'
import MessageService from '../services/MessageService'
import { Link } from 'react-router-dom'
export default function MessageList() {


    const [messages, setMessages] = useState([])

    useEffect(() => {
        let messageService = new MessageService()
        messageService.getMessages().then(result => setMessages(result.data))
    }, [])





    return (
        <Grid columns={2}>


            {messages.map((message) => (<Grid.Column>
                <Segment raised >
                    <Label as='a' color='red' ribbon attached='top left' >
                        Message
                    </Label>
                    <span><Link to={`/users/${message.sender}`}> <h3>{message.sender} </h3> </Link></span>
                    <p>{message.timestamp}</p>
                    <div>
                        {message.content}
                    </div>
                    


                </Segment>
            </Grid.Column>
            ))}

        </Grid>
    )
}
