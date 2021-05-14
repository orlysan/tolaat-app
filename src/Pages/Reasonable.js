import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class Reasonable extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
       
    const card = this.props.book.filter(book => book.category == "reasonable")
   
    console.log(card)
              
        if( ! this.props.activeUser){
            window.location.href = "/#/reasonable"
            return null
        }
        return(
            <div>
                <CategoryHeader categoryTitle="ספרים שיעבירו לכם בידוד בסביר"/>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <BookCard />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Reasonable;