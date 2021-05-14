import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class NotForMe extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
       
    const card = this.props.book.filter(book => book.category == "not-for-me")
   
    console.log(card)
              
        if( ! this.props.activeUser){
            window.location.href = "/#/not-for-me"
            return null
        }
        return(
            <div>
                <CategoryHeader categoryTitle="כמו שאומרים בגן: זה לא לטעמי"/>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <BookCard />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NotForMe;