import React from 'react';
import { Card } from 'react-bootstrap';

class BookCard extends React.Component{
    constructor(props){
        super(props)
    }

  

    render(){
       
        return(
            <Card>
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
        )
    }
}

export default BookCard;