import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './UserGallery.css'

class UserGallery extends React.Component{
   

    render(){
        const book = this.props.favorite.map(book => {
            return (
                <Col xs={1} md={2} lg={4}>
                    <img src={book.img} alt={book.alt} id={book.id} className="user-book"></img>       
                </Col>
            )
        })
        
       
        return(
          <Container>
              <h1>ספרים שאהבתי:</h1>
            <Row>{book}</Row>
          </Container>
        )
    }
}

export default UserGallery;