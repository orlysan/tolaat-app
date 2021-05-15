import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class ForeverBook extends React.Component{
    constructor(props){
        super(props)
    }

    getBooksCategory = () => {
        const card = this.props.book.filter(book => {
            if(book.category == "forever"){
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
            <div className="p-forever">
                <CategoryHeader categoryTitle="ספרים לזכור לנצח נצחים"/>
                <Row>
                    <Col>
                        <BookCard getBook = {getBook}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ForeverBook;