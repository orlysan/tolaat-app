import React from 'react';
import './TolaatNavbar.css'
import { Navbar , Nav, Dropdown, Form, FormControl } from 'react-bootstrap';


class TolaatNavbar extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        searchFriend : '',
        friendResult : []
    }
   }
    goToUser = () => {
        window.location.href="#/user"
    }
    
    //filter from search and set to controll input
    filterFriends = (e) => {
        this.setState({
            searchFriend : e.target.value, 
            friendResult : this.props.allUsers.filter(user => {
                return user.name.toLowerCase().includes( e.target.value.toLowerCase())  
            })
        })
}
 
    

    render(){
        
        this.handleOption = () => {
            this.props.friendResult(this.state.friendResult)
         }
        
        const loginEl = ( ! this.props.activeUser) ? <Nav.Link href="#/login">התחברות</Nav.Link> : null;
        const signupEl = ( ! this.props.activeUser) ? <Nav.Link href="#/signup">הרשמה</Nav.Link> : null;  
        const nameEl = (this.props.activeUser) ? <Nav.Link onClick={this.goToUser}>Hello {this.props.activeUser.name}</Nav.Link> : null;
        const signoutEl = (this.props.activeUser) ? <Nav.Link onClick={() => this.props.logout()} href="#/">התנתקות</Nav.Link> : null;
        const searchEl = (this.props.activeUser) ?  
            <FormControl
                type="text"
                className="tolaat-dropdown"  
                placeholder="חפש חברים" 
                onChange={this.filterFriends}
                value={this.state.searchFriend}
                list="datalistOptions"
                
            />:null;
        const filterBtn = (this.state.searchFriend) ? <button onClick={this.handleOption}>בחר</button> : null;
       
        return(
            <Navbar bg="light" expand="lg" sticky="top" className="tolaat-navbar navbar justify-space-between" >
                <Navbar.Brand href="#/">תולעת ספרים</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                    <Nav.Link href="#/forever">ספרים לנצח</Nav.Link>
                    <Nav.Link href="#/week">ספרים לשבוע</Nav.Link>
                    <Nav.Link href="#/reasonable">ספרים לבידוד סביר</Nav.Link>
                    <Nav.Link href="#/not-for-me">זה לא לטעמי</Nav.Link>
                </Nav>
                <Nav className="nav-tolat-left">            
                        {searchEl}
                            <datalist id="datalistOptions">
                                    {this.state.friendResult.map(opt => <option>{opt.name}</option>)}
                            </datalist>
                        {filterBtn}
                        {signoutEl}  
                        {nameEl}
                        {loginEl}
                        {signupEl}
                </Nav>
  
                </Navbar.Collapse>
            </Navbar>
   
        )
    }
}

export default TolaatNavbar;