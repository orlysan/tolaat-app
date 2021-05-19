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
                aboutMe: '',
                img: ''
            }
           
        }
    }

    updateName = (e) => {
        this.setState(Object.assign(this.state.newUser,{ name: e.target.value}))
    }

    updateEmail = (e) => {
        this.setState(Object.assign(this.state.newUser,{ email: e.target.value}))
    }

    updatePwd = (e) => {
        this.setState(Object.assign(this.state.newUser,{ pwd: e.target.value}))
    }

    updateAboutme = (e) => {
        this.setState(Object.assign(this.state.newUser,{ aboutMe: e.target.value}))
    }

    updateImage = (e) => {
        this.setState(Object.assign(this.state.newUser,{ img: e.target.value}))
    }

    handleAddUser = () => {
        this.props.addUser(this.state.newUser)
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
                                type="text" placeholder="שם" 
                                onChange={this.updateName}
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
                                type="email" placeholder="אימייל" 
                                onChange={this.updateEmail}
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
                            type="password" placeholder="סיסמא"
                            onChange={this.updatePwd}
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
                            type="password" placeholder="אימות סיסמא"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>קצת על עצמי</Form.Label>
                        <Form.Control as="textarea" rows={3} 
                            onChange= {this.updateAboutme}
                            value={this.state.aboutMe}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.File
                            className="position-relative mt-3"
                            required
                            name="file"
                            label="העלאת תמונה"
                            id="validationFormik107"
                            feedbackTooltip
                            onChange={this.updateImage}
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