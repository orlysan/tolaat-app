import React from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            newUser : {
                name: '',
                email: '',
                pwd: '',
                pswConformation : '',
                aboutMe: '',
                img: '',
                favorites: []
            },
            error: ''
           
        }
    }

 
    handleAddUser = () => {
        
        this.props.addUser(this.state.newUser)
    }

    handleChange = (e) => {
        this.setState(Object.assign(this.state.newUser, {
            [e.target.name] : e.target.value
        })) 
    }


    render(){
        
        return(
            <div className='p-signup'>
               
                <Form className="signup-form">
                <h1>הירשם</h1>
                    <Form.Group className="login-form-group" as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            שם
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type="text"
                                name="name" 
                                placeholder="שם" 
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="login-form-group" as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            מייל
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="אימייל" 
                                onChange={this.handleChange}
                                value={this.state.email}
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
                            name="pwd"
                            placeholder="סיסמא"
                            onChange={this.handleChange}
                            value={this.state.pwd}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword" className="mt-3">
                        <Form.Label column sm={2}>
                           אימות סיסמא
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type="password" 
                            name="pswConformation"
                            placeholder="אימות סיסמא"
                            onChange={this.handleChange}
                            value={this.state.pswConformation}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>קצת על עצמי</Form.Label>
                        <Form.Control as="textarea" rows={3} 
                            name="aboutMe"
                            onChange= {this.handleChange}
                            value={this.state.aboutMe}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.File
                            className="position-relative mt-3"
                            required
                            name="img"
                            label="העלאת תמונה"
                            id="validationFormik107"
                            feedbackTooltip
                            onChange={this.handleChange}
                            value={this.state.img}
                         />
                    </Form.Group>
  

                    <Form.Group as={Row} className="login-button">
                        <Col>
                            <Button 
                                type="button"
                                onClick={this.handleAddUser}
                                >הירשם
                            </Button>
                             <Link to="/">בחזרה לעמוד הבית</Link>
                        </Col>
                    </Form.Group>
                </Form>
               
            </div>
        )
    }
}

export default Signup;