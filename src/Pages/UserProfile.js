import React from 'react';
import { Button, Card } from 'react-bootstrap';
import UserGallery from '../Components/UserGallery';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="p-user-profile">
                <Card style={{ width: '70%' }}>
                    <Card.Img variant="right" src="holder.js/171x180" roundedCircle />
                    <Card.Body>
                        <Card.Title>User name</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    
                </Card>
                <UserGallery />
            </div>
        )
    }
}

export default UserProfile;