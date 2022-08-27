import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Card, Image } from 'semantic-ui-react'
import UserService from '../services/userService'
import { Link } from 'react-router-dom'
export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        let userService = new UserService()
        userService.getUsers().then(result => setUsers(result.data.data))
    })


    return (
        <div>
            <Card.Group itemsPerRow="4">
                {users.map((user) => (<Card>
                    <Image src='https://cdn-icons.flaticon.com/png/512/560/premium/560277.png?token=exp=1660739725~hmac=dbe22e19edc07116b0011a5b1de2a9ec' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header> <Link to={`/users/${user.name}`}>  {user.name}</Link></Card.Header>
                        <Card.Meta>
                            <span >{user.lastName}</span>
                        </Card.Meta>
                        <Card.Description>
                        Employee
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                           {user.email}
                        </a>
                    </Card.Content>
                </Card>

                ))}
            </Card.Group>



        </div>
    )
}
