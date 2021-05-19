import React from 'react';
import './TolaatNavbar.css'
import { Navbar , Nav} from 'react-bootstrap';

class TolaatNavbar extends React.Component{
    constructor(props){
        super(props)
    }

    goToUser = () => {
        window.location.href="/#/user"
    }
    

    render(){
        const loginEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/login">התחברות</Nav.Link> : null;
        const signupEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/signup">הרשמה</Nav.Link> : null;  
        const nameEl = (this.props.activeUser) ? <Nav.Link onClick={this.goToUser}>Hello {this.props.activeUser.name}</Nav.Link> : null
        const signoutEl = (this.props.activeUser) ? <Nav.Link onClick={() => this.props.logout()} href="/#/home">התנתקות</Nav.Link> : null;
       
        return(
            <Navbar expand="lg" className="tolaat-navbar">
                <Navbar.Brand href="/#/">תולעת ספרים</Navbar.Brand>
                <Nav.Link href="/#/forever">ספרים לנצח</Nav.Link>
                <Nav.Link href="/#/week">ספרים לשבוע</Nav.Link>
                <Nav.Link href="/#/reasonable">ספרים לבידוד סביר</Nav.Link>
                <Nav.Link href="/#/not-for-me">זה לא לטעמי</Nav.Link>
            
            
                <Navbar.Collapse className="justify-content-end">
                    {loginEl}
                    {signupEl}
                    {signoutEl}
                    {nameEl}
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default TolaatNavbar;