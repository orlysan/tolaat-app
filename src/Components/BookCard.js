import React from 'react';
import { Modal , Button } from 'react-bootstrap';
import './BookCard.css'

class BookCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false
        }
    }
    //open and close modal function
    openModal = () => {this.setState({isModalOpen :true})}
    handleClose = () => {this.setState({isModalOpen :false})}


    render(){

     //map book list  
     const book =  this.props.getBook.map(book => {
        return (
            <div className="book-card" onClick={this.openModal}>
                <img src={book.img} alt={book.alt}></img>
            
                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                    <Modal.Body>{book.review}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        סגור
                    </Button>
                    <Button variant="primary" onClick={this.addBook}>
                        הוסף לרשימה שלי
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
     })
    
        return <div>{book}</div> 
    }
}

export default BookCard;