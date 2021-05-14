import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class Week extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
       
    const card = this.props.book.filter(book => book.category == "week")
   
    console.log(card)
              
        if( ! this.props.activeUser){
            window.location.href = "/#/login"
            return null
        }
        return(
            <div>
                <CategoryHeader categoryTitle="ספרים שיגרמו לכם לפספס שבוע מהחיים (בקטע טוב)"/>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <BookCard />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Week;