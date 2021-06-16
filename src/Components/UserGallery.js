import React from 'react';
import { Col, Container, Modal, Row, Button, Form, Card } from 'react-bootstrap';
import './UserGallery.css'

class UserGallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
              isModalOpen : false,
              newUserReview : "",
              bookId: null,
              isRemoveModalOpen : false
        }
    }

    //open and close modal function
    openModal = () => {this.setState({isModalOpen :true})}
    handleClose = () => {this.setState({isModalOpen :false})}
    handleshow =(e) => {
        
        this.setState({isModalOpen:true , bookId: e.target.id})}

    //Modal review controll input
    updateReview = (e) => {
        this.setState({newUserReview: e.target.value})
    }

    //save user review with book id and forward data to parent component
    saveModalInfo = () => { 
        this.props.userReview(this.state.bookId, this.state.newUserReview)
        this.setState({isModalOpen :false})
    }

    //remove card from favorite list
    removeCard = () =>{
        this.setState({isRemoveModalOpen : true})
        console.log("remove")
    }

    
    render(){
       
        // const book = this.props.favorite.map(book => {
        //     let showReview = JSON.parse(localStorage.activeUser).favorites.map(e => {
        //         return e
        //     })
        //     console.log(showReview)
        //     return (
        //         <Col xs={1} md={2} lg={4}>
        //             <Card className="reviewCard">
        //                 <Card.Img variant="top" 
        //                 src={book.img} 
        //                 alt={book.alt} 
        //                 id={book.id} 
        //                 className="user-book"
        //                 onClick={this.handleshow}

        //                 ></Card.Img>  
        //                 <Card.Text style={{height: "8rem"}}>{this.state.userReview}</Card.Text>  
        //             </Card>
                    
        //         </Col>
        //     )
        // })
        let book = JSON.parse(localStorage.activeUser).favorites.map(e =>{
            
            return (
                <Col xs={1} md={2} lg={4}>
                    <Card className="reviewCard">
                    <button type="button" class="btn-close" aria-label="Close" onClick={this.removeCard}></button>
                        <Card.Img variant="top" 
                                src={e.img} 
                                alt={e.alt} 
                                id={e.id} 
                                className="user-book"
                                onClick={this.handleshow}
        
                        ></Card.Img>  
                        <Card.Text>{e.review}</Card.Text>  
                    </Card>          
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

            <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </Container>
        )
    }
}

export default UserGallery;