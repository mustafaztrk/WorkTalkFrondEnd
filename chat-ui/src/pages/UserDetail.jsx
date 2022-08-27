import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'

import UserService from '../services/userService'
export default function ProductDetail() {
    let { name } = useParams()



    const[user,setUser]=useState({})

    useEffect(()=>{
      let userService=new UserService()
      userService.getByUserName(name).then(result=>setUser(result.data.data))
    },[])


    return (
        <div>
         


            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            src='https://cdn-icons.flaticon.com/png/128/506/premium/506185.png?token=exp=1660744807~hmac=9d71d5d73200420bb46b9eca389089e5'
                        />
                        <p>------------------</p>
                        <Card.Header>{user.name}</Card.Header>
                        <Card.Meta>{user.lastName}</Card.Meta>
                        <Card.Description>
                           Netaş da personel olarak çalışıyor
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
           
            </Card.Group>
        </div>
    )
}
