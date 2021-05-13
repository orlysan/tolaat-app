import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import BooksCategories from '../Components/BooksCategories';
import './HomePage.css';

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className="p-home">
                <Jumbotron className="home-jumbo">
                    <img />
                    <h1>תולעת ספרים</h1>
                    <h3>המלצות וביקורות ספרים למתקדמים</h3>
                </Jumbotron>
                <p>main text</p>
                <BooksCategories />
            </Container>
           
        )
      
    }
}

export default HomePage;