import React from 'react';
import './Login.css';
import { Form , Col , Row , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="p-login">
                <h1 class="login-title">התחברות</h1>
                <Form className="login-form">
                    <Form.Group className="login-form-group" as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            אימייל
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="אימייל" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                           סיסמא
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="סיסמא" />
                        </Col>
                    </Form.Group>
  
                    <Form.Group as={Row} controlId="formHorizontalCheck" >
                        <Col sm={{ span: 10, offset: 2 }} className="checkbox">
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button">התחבר</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <Link to="/signup">הרשמה</Link>
            </div>
        )
    }
}

export default Login;