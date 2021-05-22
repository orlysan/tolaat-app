import React from 'react';
import './Login.css';
import { Form , Col , Row , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            pwd : '',
            error : ""
        }
    }

    

    updateEmail = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    updatePwd = (event) => {
        this.setState({
            pwd : event.target.value
        })
    }

    handleLogin = () => {
      
      const foundUser =  this.props.allUsers.find(user => {
           return user.pwd === this.state.pwd && user.email === this.state.email;   
        })
        
console.log(foundUser)
        if(foundUser){
            this.props.login(foundUser);
            window.location.href = "/#/user";
            this.setState({error:''})

        } else {
            this.setState({error : "אימייל או סיסמא שגויים"})
     }      
    }

   
  

    render(){
        
        console.log(this.props.allUsers)
        return(
            <div className="p-login">
                <h1 className="login-title">התחברות</h1>
                <Form className="login-form">
                    <Form.Group className="login-form-group" as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            אימייל
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type="email" placeholder="אימייל" 
                                value={this.state.email}
                                onChange={this.updateEmail}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                           סיסמא
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type="password" placeholder="סיסמא"
                            value={this.state.pwd}
                            onChange = {this.updatePwd}
                            />
                        </Col>
                    </Form.Group>
                    <span className="error-login">{this.state.error}</span>
                    <Form.Group as={Row} className="login-button text-center">
                        <Col sm={{ span: 2, offset: 10 }}>
                            <Button 
                            type="button"
                            onClick={this.handleLogin}
                            >התחבר</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <Link  to="/signup" className="signup-from-login">הרשמה</Link>
                <Link to="/">בחזרה לעמוד הבית</Link>
            </div>
        )
    }
}

export default Login;