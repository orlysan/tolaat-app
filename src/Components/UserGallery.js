import React from 'react';
import { Container } from 'react-bootstrap';


class UserGallery extends React.Component{
    constructor(props){
        super(props)
       
    }
    

    render(){

        const favoriteBook = this.props.favorite
       //console.log(favoriteBook)
        return(
          <Container>
              <h1>ספרים שאהבתי:</h1>
          </Container>
        )
    }
}

export default UserGallery;