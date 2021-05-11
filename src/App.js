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

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeUser : {
        id: 1,
        name: 'orly',
        email: 'orlysan1@gmail.com',
        pwd: '123'
      }
    }
  }

  logout = () => {
    this.setState({
      activeUser : null
    })
  }
  render(){
  return (
    <HashRouter>
      <div className="p-app">
      <TolaatNavbar
          activeUser = {this.state.activeUser}
          logout = {this.logout}
        />
      
      <Route exact path="/">
        <HomePage />
      </Route >

      <Route exact path="/forever">
        <ForeverBook />      
      </Route>

      <Route exact path="/signup">
        <Signup />   
      </Route>

      <Route exact path="/login">
        <Login />   
      </Route>

      <Route exact path="/user">
        <UserProfile />   
      </Route>
      </div>
    </HashRouter>
  );
}
}

export default App;
