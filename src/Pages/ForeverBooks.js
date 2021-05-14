import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class ForeverBook extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categoryBooks : []
        }
    }

    render(){
       
         const card = this.props.book.filter(book => book.category == "forever")
         console.log(card)
         //this.setState({categoryBooks : card})
              
        if( ! this.props.activeUser){
            window.location.href = "/#/login"
            return null
        }
        return(
            <div className="p-forever">
                <CategoryHeader categoryTitle="ספרים לזכור לנצח נצחים"/>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <BookCard card={this.state.categoryBooks}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ForeverBook;