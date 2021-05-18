import React from 'react';
import { withRouter } from 'react-router';


class SingleBook extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
console.log(this.props)
console.log(this.props.match.params.id)
        return (
        <div>

        </div> 
        )
    }
}

export default withRouter (SingleBook);
