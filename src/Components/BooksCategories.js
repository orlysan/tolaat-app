import React from 'react';
import './BooksCategories.css'

class BooksCategories extends React.Component{
   
    
    clickCtegory = () => {
      console.log(this.props.goto)
     window.location.href=`/#/${this.props.goto}`
    }

    render(){
        return(
          <div className="categories" onClick={this.clickCtegory}>
            <h1>{this.props.category}</h1>     
          </div>
           
        )
      
    }
}

export default BooksCategories;