import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap';
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
    addBook = (x) => {  
        console.log(x) 
        //this.props.userBook(x)
    }  
    
    goToSingleBook = (e) =>{
        window.location.href="/#/books/"+e.target.id
    }

    render(){

     //map book list  
     const book =  this.props.getBook.map(book => {
    
        return (
            <Col xs={1} md={2} lg={4} className="book-card">
                <img src={book.img} alt={book.alt} id={book.id}
                    onClick={this.goToSingleBook} 
                    favorite={this.addBook}
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