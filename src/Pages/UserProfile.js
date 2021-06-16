import React from 'react';
import { Card, Row ,Col, Container } from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router';
import UserGallery from '../Components/UserGallery';
import './UserProfile.css';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }
   
    
   

     //geting favorites user books list
    
    //  getFavoriteBook = () => {
    //     const favoriteIds =  this.props.activeUser.favorites.map( i => i.id);
    //     const favoriteBooks = this.props.allBooks.filter(book =>{
    //         return favoriteIds.includes(book.id)
    //     });
    //     return favoriteBooks
    //   }   

      
      
    render(){
        if( !this.props.activeUser) {
            return <Redirect to="/login" />
        }
     
        //const favoriteList = this.getFavoriteBook()
   
        return(
          
            <Container>
                <Card className="profile-card">
                    <Row>
                        <Col sm={3}>
                            <Card.Img className="card-img" variant="right" src={this.props.activeUser.img} />
                        </Col>
                        <Col sm={9}>
                            <Card.Body>
                                <Card.Title className="user-title">{this.props.activeUser.name}</Card.Title>
                                <Card.Text>
                                    {this.props.activeUser.aboutMe}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    
                </Card>
                <UserGallery 
                    //favorite={favoriteList}
                    userReview = {this.props.userReview}
                    />
            </Container>
        )
    }
}

export default withRouter (UserProfile);