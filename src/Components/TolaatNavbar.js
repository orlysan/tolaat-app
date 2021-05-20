import React from 'react';
import './TolaatNavbar.css'
import { Navbar , Nav, Dropdown, Form} from 'react-bootstrap';

class TolaatNavbar extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        searchFriend : ''
    }
   }
    goToUser = () => {
        window.location.href="/#/user"
    }
    
    filtetFriends = (e) => {
        this.setState({searchFriend : e.target.value})
        console.log(this.props.allUsers)
        //this.props.allUsers.filter()
    }

    render(){
        const loginEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/login">התחברות</Nav.Link> : null;
        const signupEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/signup">הרשמה</Nav.Link> : null;  
        const nameEl = (this.props.activeUser) ? <Nav.Link onClick={this.goToUser}>Hello {this.props.activeUser.name}</Nav.Link> : null;
        const signoutEl = (this.props.activeUser) ? <Nav.Link onClick={() => this.props.logout()} href="/#/">התנתקות</Nav.Link> : null;
        const searchEl = (this.props.activeUser) ? <Form.Control className="tolaat-dropdown"  type="text" placeholder="חפש חברים" onKeyUp={this.filtetFriends}value={this.state.searchFriend}/>:null;
       
        return(
            <Navbar expand="lg" className="tolaat-navbar">
                <Navbar.Brand href="/#/">תולעת ספרים</Navbar.Brand>
                <Nav.Link href="/#/forever">ספרים לנצח</Nav.Link>
                <Nav.Link href="/#/week">ספרים לשבוע</Nav.Link>
                <Nav.Link href="/#/reasonable">ספרים לבידוד סביר</Nav.Link>
                <Nav.Link href="/#/not-for-me">זה לא לטעמי</Nav.Link>
            
            
                <Navbar.Collapse className="justify-content-end">
                    {searchEl}
                    {signoutEl}  
                    {nameEl}
                    {loginEl}
                    {signupEl}
                   
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default TolaatNavbar;