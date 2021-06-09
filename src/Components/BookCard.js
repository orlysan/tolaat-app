import React from 'react';
import { Col, Row, } from 'react-bootstrap';
import './BookCard.css'

class BookCard extends React.Component{
    


    //chose book for user favorite list
   
    
    goToSingleBook = (id) =>{
        window.location.href="#/books/"+id
    }

    render(){

     //map book list and show it at the card
     const book =  this.props.getBook.map((book, index) => {
    
        return (
            <Col sm={1} md={6} lg={4} className="book-card" key={index}>
                <img src={book.img} alt={book.alt}  
                    onClick={() => this.goToSingleBook(book.id)} 
                    >
                </img>       
            </Col>
         )
        
     })   
        return (
           <Row>
                {book}
           </Row>                   
        )   
    }
}

export default BookCard;