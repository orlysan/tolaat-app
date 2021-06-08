import React from 'react';
import { Row } from 'react-bootstrap';
import './CategoryHeader.css';

class CategoryHeader extends React.Component{
  
   render(){
       return (
           <Row className="category-heder home-jumbo" >
               <h1>{this.props.categoryTitle}</h1>
           </Row>
       )
   }
}

export default CategoryHeader;