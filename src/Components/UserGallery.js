import React from 'react';
import { Col, Container, Modal, Row, Button, Form } from 'react-bootstrap';
import './UserGallery.css'

class UserGallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
              isModalOpen : false,
              userReview : ""
        }
    }

    //open and close modal function
    openModal = () => {this.setState({isModalOpen :true})}
    handleClose = () => {this.setState({isModalOpen :false})}
    handleshow =() => {this.setState({isModalOpen:true})}

    //Modal review controll input
    updateReview = (e) => {
        this.setState({userReview: e.target.value})
    }

    //save user review and forward data to parent component
    saveModalInfo = () => {
        this.props.userReview(this.state.userReview)
    }

    
    render(){
        
        const book = this.props.favorite.map(book => {
            return (
                <Col xs={1} md={2} lg={4}>
                    <img 
                        src={book.img} 
                        alt={book.alt} 
                        id={book.id} 
                        className="user-book"
                        onClick={this.handleshow}
                        ></img>       
                </Col>
            )
        })
        
        
       
        return(
          <Container>
              <h1>ספרים שאהבתי:</h1>
            <Row>{book}</Row>
            <Modal show={this.state.isModalOpen} onHide={this.handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>רציתי להוסיף..</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="ההמלצה שלי" onChange={this.updateReview}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        סגור
                    </Button>
                    <Button variant="primary" onClick={this.saveModalInfo}>
                        שמור
                    </Button>
                    </Modal.Footer>
            </Modal>
          </Container>
        )
    }
}

export default UserGallery;