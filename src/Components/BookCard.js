import React from 'react';
import { Col, Row, } from 'react-bootstrap';
import './BookCard.css'

class BookCard extends React.Component{
    
        // this.state = {
        //     // isModalOpen : false,
        // }
    
    //open and close modal function
    // openModal = () => {this.setState({isModalOpen :true})}
    // handleClose = () => {this.setState({isModalOpen :false})}


    //chose book for user favorite list
   
    
    goToSingleBook = (e) =>{
        window.location.href="/#/books/"+e.target.id
    }

    render(){

     //map book list  
     const book =  this.props.getBook.map((book, index) => {
    
        return (
            <Col xs={1} md={2} lg={4} className="book-card" key={index}>
                <img src={book.img} alt={book.alt} id={book.id} 
                    onClick={this.goToSingleBook} 
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