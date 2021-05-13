import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import TolaatNavbar from './Components/TolaatNavbar';
import ForeverBook from './Pages/ForeverBooks';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import './App.css'
import React from 'react';
import { Container } from 'react-bootstrap';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      allUsers :  [],
      activeUser : null
    }
  }

  //get users data 
  componentDidMount = () => {
    fetch('/users.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allUsers : data
      })
    })
  }


  login = (userObj) => {
    console.log(userObj)
    this.setState({
      activeUser : userObj
    })
  }

  logout = () => {
    this.setState({
      activeUser : null
    })
  }

  addUser = (newUser) =>{
    this.setState({
      allUsers : this.state.allUsers.concat(newUser)
    })
    window.location.href="/#/user"
  }

  render(){
    
  return (
    <HashRouter>
      <div className="p-app">
        <Route exact path={["/" , "/forever" , "/user"]}> 
          <TolaatNavbar
              activeUser = {this.state.activeUser}
              logout = {this.logout}
            />
        </Route>
      <Container>
      <Route exact path="/">
        <HomePage />
      </Route >

      <Route exact path="/forever">
        <ForeverBook 
          activeUser = {this.state.activeUser} 
        />      
      </Route>

      <Route exact path="/signup">
        <Signup 
        addUser={this.addUser}
        />   
      </Route>

      <Route exact path="/login">
        <Login 
        allUsers = {this.state.allUsers}
        login={this.login}/>   
      </Route>

      <Route exact path="/user">
        <UserProfile />   
      </Route>
      </Container>
      </div>
     
    </HashRouter>
  );
}
}

export default App;
