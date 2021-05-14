import React from 'react';
import './BooksCategories.css'

class BooksCategories extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <div className="categories">
            <h1>{this.props.category}</h1>     
          </div>
           
        )
      
    }
}

export default BooksCategories;