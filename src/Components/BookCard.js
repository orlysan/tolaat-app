import React from 'react';
import SingleBook from '../Pages/SingleBook';
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

    render(){

     //map book list  
     const book =  this.props.getBook.map(book => {
    
        return (
          
            <div className="book-card">
                <img src={book.img} alt={book.alt}></img>
                <SingleBook />
               {/*  
               <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                    <Modal.Body>{book.review}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        סגור
                    </Button>
                    <Button variant="primary" onClick={() => this.addBook(book.id)}>
                        הוסף לרשימה שלי
                    </Button>
                    </Modal.Footer>
                </Modal>
                */}
            </div>

        )
     })
    
        return <div>{book}</div> 
    }
}

export default BookCard;