import React from 'react';
import './CategoryHeader.css';

class CategoryHeader extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return (
           <div className="category-heder">
               <img src="./homePageTitle.jpg" />
               <h1>{this.props.categoryTitle}</h1>
           </div>
       )
   }
}

export default CategoryHeader;