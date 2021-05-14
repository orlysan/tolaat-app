import React from 'react';

class CategoryHeader extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return (
           <div>
               <img src="./homePageTitle.jpg" className="category-img"/>
               <h1>{this.props.categoryTitle}</h1>
           </div>
       )
   }
}

export default CategoryHeader;