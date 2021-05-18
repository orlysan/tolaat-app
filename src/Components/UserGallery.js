import React from 'react';
import { Container } from 'react-bootstrap';


class UserGallery extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
        return(
          <Container>
              <h1>ספרים שאהבתי:</h1>
          </Container>
        )
    }
}

export default UserGallery;