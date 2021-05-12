import React from 'react';
import './Login.css';
import { Form , Col , Row , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            pwd : ''
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
    

    render(){
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
                                type="email" 
                                placeholder="אימייל" 
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
                            type="password" 
                            placeholder="סיסמא"
                            value={this.state.pwd}
                            onChange = {this.updatePwd}
                            />
                        </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalCheck" >
                        <Col sm={{ span: 10, offset: 2 }} className="checkbox">
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button">התחבר</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <Link  to="/signup">הרשמה</Link>
            </div>
        )
    }
}

export default Login;