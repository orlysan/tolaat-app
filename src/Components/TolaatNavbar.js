import React from 'react';
import './TolaatNavbar.css'
import { Navbar , Nav, Dropdown, Form } from 'react-bootstrap';

class TolaatNavbar extends React.Component{
   constructor(props){
    super(props)
    this.state = {
        searchFriend : '',
        friendResult : []
    }
   }
    goToUser = () => {
        window.location.href="/#/user"
    }
    
    filterFriends = (e) => {
        this.setState({
            searchFriend : e.target.value, 
            friendResult : this.props.allUsers.filter(user => {
                return user.name.toLowerCase().includes( e.target.value.toLowerCase())  
            })
        })

      
        // let friend = this.props.allUsers.filter(user => {
        //     if(user.name == e.target.value){
        //         return user.name;
        //     }
        // });
        //    this.setState({friendResult : friend})
            //return  <option>{user.name}</option>
    }
 
    

    render(){

        this.handleOption = (e) => {
            console.log(e)
         }
        
        const loginEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/login">התחברות</Nav.Link> : null;
        const signupEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/signup">הרשמה</Nav.Link> : null;  
        const nameEl = (this.props.activeUser) ? <Nav.Link onClick={this.goToUser}>Hello {this.props.activeUser.name}</Nav.Link> : null;
        const signoutEl = (this.props.activeUser) ? <Nav.Link onClick={() => this.props.logout()} href="/#/">התנתקות</Nav.Link> : null;
        const searchEl = (this.props.activeUser) ? 
            <Form.Control 
                className="tolaat-dropdown"  
                type="text" placeholder="חפש חברים" 
                onChange={this.filterFriends}
                value={this.state.searchFriend}
                list="brow"
                />:null;
       
        return(
            <Navbar expand="lg" className="tolaat-navbar">
                <Navbar.Brand href="/#/">תולעת ספרים</Navbar.Brand>
                <Nav.Link href="/#/forever">ספרים לנצח</Nav.Link>
                <Nav.Link href="/#/week">ספרים לשבוע</Nav.Link>
                <Nav.Link href="/#/reasonable">ספרים לבידוד סביר</Nav.Link>
                <Nav.Link href="/#/not-for-me">זה לא לטעמי</Nav.Link>
                <Nav.Link href="/#/classic">קלסיקות</Nav.Link>
            
            
                <Navbar.Collapse className="justify-content-end">
                    
                        {searchEl}
                        <datalist id="brow">
                            <select onChange={this.handleOption}>
                             {this.state.friendResult.map(opt => 
                             <option key={opt.id}>{opt.name}</option>)}
                             </select>
                        </datalist>
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