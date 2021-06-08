import React from 'react';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class Category extends React.Component{
  
    getBooksCategory = () => {
        const card = this.props.book.filter(book => {
            if(book.category ===  this.props.category){
                return true;
            }
        })
       return card
    } 
    
    userBook = (id) =>{
        console.log(id)
    }
    
    render(){         
       
        const getBook = this.getBooksCategory()
       
        return(
            <div className="p-forever">
                <CategoryHeader categoryTitle={this.props.title}/>
               
                        <BookCard 
                            getBook = {getBook}
                            userBook = {this.userBook}
                            />
               
            </div>
        )
    }
}

export default Category;
