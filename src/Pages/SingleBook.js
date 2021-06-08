import { Button } from 'react-bootstrap';
import React from 'react';
import { withRouter } from 'react-router';
import './SingleBook.css'


class SingleBook extends React.Component{
   
    addToFavorite = (book) => {
        if(localStorage.getItem('activeUser') == null){
            alert("כדי להוסיף למועדפים שלי עליך להירשם לאתר") 
        } else {
            this.props.favorite(book.id)
            window.location.href="#/user"
        }
     }

    goBack = () => {
        window.history.back();
    }
    render(){
        console.log(localStorage.getItem('activeUser'))
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
                {book.review.split("\n").map(str => <p>{str}</p>)}
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
