import React from 'react';

class ForeverBook extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if( ! this.props.activeUser){
            window.location.href = "/#/login"
            return null
        }
        return(
            <div className="p-forever">
                ForeverBook
            </div>
        )
    }
}

export default ForeverBook;