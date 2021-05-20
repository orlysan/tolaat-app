import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import TolaatNavbar from './Components/TolaatNavbar';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import './App.css'
import React from 'react';
import { Container } from 'react-bootstrap';
import SingleBook from './Pages/SingleBook';
import Category from './Pages/Category';




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      allUsers :  [],
      allBooks : [],
      //activeUser : null
      activeUser : {
        name: 'Orly',
        email: 'orlysan1@gmail.com',
        pwd: '123',
        aboutMe: 'my profile',
        img: '/testImage.jpeg',
        favorites: []
      }
    }
  }

  
  componentDidMount = () => {
    //get users data 
    fetch('/users.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allUsers : data
      })
    })

    //get books data
    fetch('books.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allBooks :data
      })
    })
  }

//login
  login = (userObj) => {
    this.setState({
      activeUser : userObj
    })
  }


  //logout
  logout = () => {
    this.setState({
      activeUser : null
    })
    
  }


  //signup
  addUser = (newUser) =>{
    this.setState({
      allUsers : this.state.allUsers.concat(newUser),
      activeUser : newUser
    })
    window.location.href="/#/user"
  }

  //add favorite book
  addBook = (book) => {  
    this.setState({
      activeUser : 
      {...this.state.activeUser, favorites : this.state.activeUser.favorites.concat(book)
      }  
    })
}  

  render(){
    
  return (
    <HashRouter>
      <div className="p-app">
        <Route exact path={["/" , "/forever" , "/week", "/reasonable" , "/not-for-me",   "/user"]}> 
          <TolaatNavbar
              activeUser = {this.state.activeUser}
              logout = {this.logout}
            />
        </Route>
      <Container>
      <Route exact path="/">
        <HomePage 
          activeUser = {this.state.activeUser}
          book = {this.state.allBooks} 
        />
      </Route >
     
      <Route exact path="/forever">
      <Category
         activeUser = {this.state.activeUser}
         book = {this.state.allBooks}
         title ="ספרים לזכור לנצח נצחים"
         category="forever"
        />      
      </Route>

      <Route exact path="/week">
        <Category
          activeUser = {this.state.activeUser}
          book = {this.state.allBooks}
          title ="ספרים שיגרמו לכם לפספס שבוע מהחיים"
          category="week"
          />   
      </Route>

      <Route exact path="/reasonable">
        <Category
          activeUser = {this.state.activeUser}
          book = {this.state.allBooks}
          title ="ספרים שיעבירו לכם בידוד בסביר"
          category="reasonable"
        />  
      </Route>

      <Route exact path="/not-for-me">
        <Category
          activeUser = {this.state.activeUser}
          book = {this.state.allBooks}
          title ="כמו שאומרים בגן: זה לא לטעמי"
          category="not-for-me"
          />       
      </Route>

      <Route exact path="/books/:id">
        <SingleBook
          activeUser={this.state.activeUser} 
          allBooks={this.state.allBooks}
          favorite={this.addBook}/>
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
        <UserProfile
          activeUser={this.state.activeUser}
          allBooks={this.state.allBooks}
        />   
      </Route>

      </Container>
      </div>
     
    </HashRouter>
  );
}
}

export default App;
