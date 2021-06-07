import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import TolaatNavbar from './Components/TolaatNavbar';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import './App.css'
import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import SingleBook from './Pages/SingleBook';
import Category from './Pages/Category';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      allUsers : localStorage.allUsers ? JSON.parse(localStorage.allUsers) : [],
      allBooks : localStorage.allBooks ? JSON.parse(localStorage.allBooks) : [],
      activeUser : localStorage.activeUser ? JSON.parse(localStorage.activeUser) :  null,
      isModalOpen : false,
    }
  }

  
  componentDidMount = () => {
    //get users data and storage at localStorage
    fetch('/users.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allUsers : data
      })
      localStorage.allUsers = JSON.stringify(data)
    })

    //get books data and storage at localStorage
    fetch('books.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allBooks :data
      })
      localStorage.allBooks = JSON.stringify(data)
    })


    //showing modal as a popup
    // setTimeout( () =>{
    //   this.openModal()
    // }, 5000)
     
  }
 

//login function and storage user in localstorage and in state
  login = (userObj) => {
    this.setState({
      activeUser : userObj
    })
    localStorage.activeUser = JSON.stringify(userObj)
  }


  //logout
  logout = () => {
    this.setState({
      activeUser : null
    })
    localStorage.activeUser = null;
  }


  //signup- adding newUser to allUsers state and to the activeUser, redirect to the user page
  addUser = (newUser) =>{
    console.log(newUser)
    this.setState({
      allUsers : this.state.allUsers.concat(newUser),
      activeUser : newUser
    })
    localStorage.allUsers = JSON.stringify( this.state.allUsers.concat(newUser))
    console.log(newUser)
    window.location.href="#/user"
  }

  //add favorite book and storge in localStorage and in activeUsers.favoriets state
  addBook = (book) => { 
   
   const favorites = this.state.activeUser.favorites.concat( 
     {id: book,
    review:""})
    const localEl = {...this.state.activeUser, favorites  : favorites}
    localStorage.activeUser = JSON.stringify(localEl)
    this.setState({
      activeUser : 
    {...this.state.activeUser, favorites  : favorites}  
    })

   
} 

//update user review and storage in localstorage and state
handleUserReview = ( id , userReviewid) =>{
  const favorites = this.state.activeUser.favorites.concat(
    {id: id,
    review : userReviewid}
  )
  const localReview = {...this.state.activeUser, favorites  : favorites}
  localStorage.activeUser = JSON.stringify(localReview)
  const addData = this.state.allUsers.filter(user => user.id == this.state.activeUser.id)
  localStorage.allUsers = JSON.stringify( this.state.allUsers.concat(localReview))
  this.setState({
      activeUser : {...this.state.activeUser, favorites  : favorites},
      //allUsers : {...this.state.allUsers.filter(user => user.id == this.state.activeUser.id)}
    })
    
    console.log(this.state.allUsers)
    console.log(addData)
}



//open and close modal function
openModal = () => {this.setState({isModalOpen :true})}
handleClose = () => {this.setState({isModalOpen :false})}
handleshow =() => {this.setState({isModalOpen:true})}
handlOpenAccount = () => {
  window.location.href="npm#/signup"
  this.setState({isModalOpen :false})
  
}

handleFriendResult = (friends) => {
  const friendEl = friends.map(friend => {
    return friend.id
  })
  console.log(friendEl)
}

  render(){
  return (
    <HashRouter>
      <div className="p-app">
        <Route exact path={["/" , "/forever" , "/week", "/reasonable" , "/not-for-me",   "/user" , "/classic"]}> 
          <TolaatNavbar
              allUsers={this.state.allUsers}
              activeUser = {this.state.activeUser}
              logout = {this.logout}
              friendResult ={this.handleFriendResult}
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
        allUsers={this.state.allUsers}
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
          userReview={this.handleUserReview}
        />   
      </Route>

      

      </Container>
      </div>

     
    
      <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
        <Modal.Header>
          <Modal.Title>עוד אין לכם חשבון?</Modal.Title>
        </Modal.Header>
        <Modal.Body>רוצים לקבל המלצות ולשתף את הספרים וההמלצות שלכם?  פתחו חשבון והצטרפו לקהילת התולעים</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            סגור
          </Button>
          <Button variant="primary" onClick={this.handlOpenAccount}>
            פתח חשבון
          </Button>
        </Modal.Footer>
      </Modal>
     
    </HashRouter>
  );
}
}

export default App;
