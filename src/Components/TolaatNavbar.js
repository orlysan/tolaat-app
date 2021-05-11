import React from 'react';
import { Navbar , Nav} from 'react-bootstrap';

class TolaatNavbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Navbar expand="lg">
                <Navbar.Brand href="/#/">תולעת ספרים</Navbar.Brand>
                <Nav.Link href="/#/forever">ספרים לנצח</Nav.Link>
                <Nav.Link href="/#/week">ספרים לשבוע</Nav.Link>
                <Nav.Link href="/#/reasonable">ספרים לבידוד סביר</Nav.Link>
                <Nav.Link href="/#/not-for-me">זה לא לטעמי</Nav.Link>
            
            
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/#/signup">הרשמה</Nav.Link>
                    <Nav.Link href="/#/login">התחברות</Nav.Link>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default TolaatNavbar;