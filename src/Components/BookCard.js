import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './BookCard.css'

class BookCard extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     // isModalOpen : false,
        // }
    }
    //open and close modal function
    // openModal = () => {this.setState({isModalOpen :true})}
    // handleClose = () => {this.setState({isModalOpen :false})}


    //chose book for user favorite list
    addBook = (id) => { 
        
        this.props.userBook(id)
    }  
    
    goToSingleBook = (e) =>{
        window.location.href="/#/books/"+e.target.id
    }

    render(){

     //map book list  
     const book =  this.props.getBook.map(book => {
    
        return (
           <img src={book.img} alt={book.alt} onClick={this.goToSingleBook} id={book.id}></img>       
        )
        
     })
    
        return (
            <Row>
                <Col xs={6} md={4} lg={2} className="book-card">
                    {book}
                </Col>
            </Row>
        )
     
    }
}

export default BookCard;