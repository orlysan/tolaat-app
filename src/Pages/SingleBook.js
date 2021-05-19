import { Button } from 'react-bootstrap';
import React from 'react';
import { withRouter } from 'react-router';
import './SingleBook.css'


class SingleBook extends React.Component{
    constructor(props){
        super(props);
    }

    addToFavorite = (book) => {
        console.log(book)
        //this.props.favorite(book.id)
        //window.location.href="/#/user"
    }

    goBack = () => {
        window.history.back();
    }
    render(){
        const bookList = this.props.allBooks;
        const bookId = this.props.match.params.id;
        const book = bookList.find(book => {
            if(book.id == bookId){
                return true
            }
        })
        
         
    
        return (
           
        <div className="p-singleBook">
            <div className="book-review">
                {book.review}
            </div>
            <div className="buttons-section">
                <Button type="button" onClick={() => this.addToFavorite(book)}>הוסף למועדפים שלי</Button>
                <Button type="button" onClick={this.goBack}>סגור</Button>
            </div>
        </div> 
   
        )
    }
}

export default withRouter (SingleBook);
