import React from 'react';
import { Card, Row ,Col } from 'react-bootstrap';
import UserGallery from '../Components/UserGallery';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

     //geting favorites user books list
     getFavoriteBook = () => {
        const favoriteBooks = this.props.allBooks.filter(book =>{
            return this.props.activeUser.favorites.includes(book.id)
        });
        return favoriteBooks
      }    

    render(){
     
        const favoriteList = this.getFavoriteBook()
        
       
        return(
            <div className="p-user-profile">
                <Card className="profile-card">
                    <Row>
                        <Col sm={4}>
                            <Card.Img className="card-img" variant="right" src={this.props.activeUser.img} />
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
                <UserGallery favorite={favoriteList}/>
            </div>
        )
    }
}

export default  UserProfile;