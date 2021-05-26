import React from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';



class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            newUser : {
                id:'',
                name: '',
                email: '',
                pwd: '',
                pswConformation : '',
                aboutMe: '',
                img: '',
                favorites: []
            },
            nameError:'',
            emailError: '',
            pwdError:'',
            confirmPwdError:'',
        }
    }
    
    handleChange = (e) => {
        this.setState(Object.assign(this.state.newUser, {
            [e.target.name] : e.target.value
        })) 
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let pwdError = "";
        let confiemPwd = "";

        if(! this.state.newUser.name){
            nameError ="נא למלא שם"
        }
        if(! this.state.newUser.email.includes('@')){
            emailError="מייל לא תקין"
        }
        if(this.state.newUser.pwd.length < 6){
            pwdError="סיסמא צריכה להיות בעלת שישה תווים לפחות"
        }
        if(this.state.newUser.pswConformation !== this.state.newUser.pwd){
            confiemPwd = "סיסמא אינה זהה"
        }

        if(emailError || nameError || pwdError || confiemPwd){
            this.setState({emailError , nameError, pwdError, confiemPwd})
            return false
        }
        return true
    }

    handleAddUser = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            this.props.addUser(this.state.newUser);
            this.state.emailError = "";
            this.state.nameError = "";
            this.state.pwdError ="";
            this.state.confiemPwd="";
        }
    }
      
    render(){
        //find last user id and add id for new user state
            const allUsers = this.props.allUsers
            const lastID =  allUsers[allUsers.length-1].id
            const newId = lastID + 1 
        this.setState(prevState => {
            let newUser = Object.assign({}, prevState.newUser);
            newUser.id = newId;
            return newUser;
        })
          
        return(
            <div className='p-signup'>
               
                <Form className="signup-form" noValidate>
                <h1>הירשם</h1>
                    <Form.Group className="login-form-group" as={Row} controlId="formHorizontal">
                        <Form.Label column sm={2}>
                            שם
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                required
                                noValidate
                                type="text"
                                name="name" 
                                placeholder="שם" 
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </Col>
                        <div className="error-signup">{this.state.nameError}</div>
                    </Form.Group>
                   

                    <Form.Group className="login-form-group" as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            מייל
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                required
                                noValidate
                                type="email" 
                                name="email"
                                placeholder="אימייל" 
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </Col>
                         <div className="error-signup">{this.state.emailError}</div>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                           סיסמא
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type="password"
                            noValidate 
                            name="pwd"
                            placeholder="סיסמא"
                            onChange={this.handleChange}
                            value={this.state.pwd}
                            />
                        </Col>
                        <div className="error-signup">{this.state.pwdError}</div>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword" className="mt-3">
                        <Form.Label column sm={2}>
                           אימות סיסמא
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type="password" 
                            noValidate
                            name="pswConformation"
                            placeholder="אימות סיסמא"
                            onChange={this.handleChange}
                            value={this.state.pswConformation}
                            />
                        </Col>
                        <div className="error-signup">{this.state.confiemPwd}</div>
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
                            name="img"
                            label="העלאת תמונה"
                            id="validationFormik107"
                            feedbackTooltip
                            onChange={this.handleChange}
                            value={this.state.img}
                         />
                    </Form.Group>
  

                    <Form.Group as={Row} className="login-button" className="text-center">
                        <Col>
                            <Button
                                className="m-3"
                                type="button"
                                onClick={this.handleAddUser}
                                >הירשם
                            </Button>
                             <Link className="m-3" to="/">בחזרה לעמוד הבית</Link>
                        </Col>
                    </Form.Group>
                </Form>
               
            </div>
        )
    }
}

export default Signup;