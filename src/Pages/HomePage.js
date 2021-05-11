import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './HomePage.css';

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className="p-home">
                <Jumbotron>
                    <img />
                    <h1>title</h1>
                </Jumbotron>
            </Container>
           
        )
      
    }
}

export default HomePage;