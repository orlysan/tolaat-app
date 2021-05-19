import React from 'react';
import './CategoryHeader.css';

class CategoryHeader extends React.Component{
  
   render(){
       return (
           <div className="category-heder" >
               <img src="./homePageTitle.jpg" alt="people-reading"/>
               <h1>{this.props.categoryTitle}</h1>
           </div>
       )
   }
}

export default CategoryHeader;