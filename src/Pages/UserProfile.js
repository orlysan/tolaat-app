import React from 'react';
import { Card, Row ,Col } from 'react-bootstrap';
import UserGallery from '../Components/UserGallery';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
      //geting favorites user books list
        const favoriteBooks = this.props.allBooks.filter(book =>{
            return this.props.activeUser.favorites.includes(book.id)
        });

        console.log(favoriteBooks)
       
        return(
            <div className="p-user-profile">
                <Card className="profile-card">
                    <Row>
                        <Col sm={4}>
                            <Card.Img className="card-img" variant="right" src={this.props.activeUser.img} roundedCircle />
                        </Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title>{this.props.activeUser.name}</Card.Title>
                                <Card.Text>
                                    {this.props.activeUser.aboutMe}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    
                </Card>
                <UserGallery favorite={favoriteBooks}/>
            </div>
        )
    }
}

export default UserProfile;