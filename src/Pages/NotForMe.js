import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class NotForMe extends React.Component{
    constructor(props){
        super(props)
    }

    getBooksCategory = () => {
        const card = this.props.book.filter(book => {
            if(book.category == "not-for-me"){
                return true;
            }
        })
       return card
    }  

    render(){
       
              
        if( ! this.props.activeUser){
            window.location.href = "/#/login"
            return null
        }

        const getBook = this.getBooksCategory()

        return(
            <div>
                <CategoryHeader categoryTitle="כמו שאומרים בגן: זה לא לטעמי"/>
            <Row>
                    <Col xs={6} md={4} lg={3}>
                        <BookCard getBook = {getBook}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NotForMe;