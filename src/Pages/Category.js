import React from 'react';
import BookCard from '../Components/BookCard';
import CategoryHeader from '../Components/CategoryHeader';

class Category extends React.Component{
    constructor(props){
        super(props)
    }

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
        if( ! this.props.activeUser){
            window.location.href = "/#/login"
            return null
        }

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
