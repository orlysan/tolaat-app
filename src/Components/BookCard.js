import React from 'react';
import './BookCard.css'

class BookCard extends React.Component{
    constructor(props){
        super(props)
    }

  

    render(){
       
        return(
            <div className="book-card">
                <img src="https://upload.wikimedia.org/wikipedia/he/e/ed/%D7%97%D7%99%D7%99_%D7%A4%D7%90%D7%99.jpg" alt="Card image"></img>
            </div>
            
        )
    }
}

export default BookCard;