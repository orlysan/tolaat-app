import React from 'react';
import { Col } from 'react-bootstrap';
import './BooksCategories.css'

class BooksCategories extends React.Component{
   
  //redirect to category page 
  clickCatgory = () => {
     window.location.href=`#/${this.props.goto}`
    }

    render(){
        return(
          <Col sm={2} md={6} className="categories" onClick={this.clickCatgory}>
            <h1>{this.props.category}</h1>     
          </Col>
           
        )
      
    }
}

export default BooksCategories;