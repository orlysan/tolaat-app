import "bootstrap/dist/css/bootstrap.min.css";
//import axios from 'axios';
import { HashRouter, Route } from "react-router-dom";
import TolaatNavbar from "./Components/TolaatNavbar";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserProfile from "./Pages/UserProfile";
import "./App.css";
import React from "react";
import { Container, Modal, Button } from "react-bootstrap";
import SingleBook from "./Pages/SingleBook";
import Category from "./Pages/Category";
//import users from './Data/users.json';
import books from "./Data/books.json";


class App extends React.Component {
  constructor(props) {
    super(props);

    localStorage.setItem("allBooks", JSON.stringify(books));
    this.state = {
      allUsers: localStorage.allUsers ? JSON.parse(localStorage.allUsers) : [],
      allBooks: localStorage.allBooks
        ? JSON.parse(localStorage.allBooks)
        : books,
      activeUser: localStorage.activeUser
        ? JSON.parse(localStorage.activeUser)
        : null,
      isModalOpen: false
    };
  }

  //using fetch to load data:
  // componentDidMount = () => {
  //   //get users data and storage at localStorage
  //   fetch('/users.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       allUsers : data
  //     })
  //     localStorage.allUsers = JSON.stringify(data)
  //   })


  //   //get books data and storage at localStorage
  //   fetch('books.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       allBooks :data
  //     })
  //     localStorage.allBooks = JSON.stringify(data)
  //   })

  //showing modal as a popup  
  // setTimeout( () =>{
  //   this.openModal()
  // }, 5000)

  //}

  //login function and storage user in localstorage and in state
  login = userObj => {
    this.setState({
      activeUser: userObj
    });
    localStorage.activeUser = JSON.stringify(userObj);
  };

  //logout
  logout = () => {
    this.setState({
      activeUser: null
    });
    localStorage.activeUser = null;
  };

  //signup- adding newUser to allUsers state and to the activeUser, redirect to the user page
  addUser = newUser => {
    this.setState({
      activeUser: newUser,
      allUsers: this.state.allUsers.concat(newUser)
    });
    localStorage.allUsers = JSON.stringify(this.state.allUsers.concat(newUser));
    localStorage.activeUser = JSON.stringify(newUser);
    window.location.href = "#/user/:id";
  };

  //add favorite book and storge in localStorage and in activeUsers.favoriets state
  //(only in case the book isn't in the favorites already)
  addBook = (bookId, bookImg) => {
    let foundId = this.state.activeUser.favorites.map(e => e.id);
    let favoriteId = foundId.includes(parseInt(bookId));
    if (!favoriteId) {
      const newFavorites = this.state.activeUser.favorites.concat({
        id: bookId,
        review: "",
        img: bookImg
      });
      const localEl = { ...this.state.activeUser, favorites: newFavorites };
      localStorage.activeUser = JSON.stringify(localEl);

      //update allUsers with the new data
      let userId = this.state.activeUser.id;
      let foundUser = this.state.allUsers.find(e => e.id == userId);
      foundUser.favorites = newFavorites;

      this.setState({
        activeUser: { ...this.state.activeUser, favorites: newFavorites },
        allUsers: this.state.allUsers
      });
      localStorage.allUsers = JSON.stringify(this.state.allUsers);
    } else {
      window.location.href = "#/user/:id";
    }
  };

  //update user review and storage in localstorage and state
  handleUserReview = (bookId, userReviewid) => {

    const newFavorites = this.state.activeUser.favorites.map(f => {
      if (f.id == bookId) {
        const newF = f;
        newF.review = userReviewid;
        return newF;
      } else {
        return f;
      }
    })

    const newActiveUser = this.state.activeUser;
    newActiveUser.favorites = newFavorites;

    this.setState({
      activeUser: newActiveUser,
      allUsers: this.state.allUsers
    });

    localStorage.activeUser = JSON.stringify(this.state.activeUser);
    localStorage.allUsers = JSON.stringify(this.state.allUsers);
  };

  //open and close modal function
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  handleClose = () => {
    this.setState({ isModalOpen: false });
  };
  handleshow = () => {
    this.setState({ isModalOpen: true });
  };
  handlOpenAccount = () => {
    window.location.href = "npm#/signup";
    this.setState({ isModalOpen: false });
  };

  handleFriendResult = friends => {
    const friendEl = friends.map(friend => {
      return friend.id;
    });
    //window.location.href="/user/"+friendEl;
    console.log(friendEl);
  };

  render() {
    return (
      <HashRouter>
        <div className="p-app">
          <Route
            exact
            path={[
              "/",
              "/forever",
              "/week",
              "/reasonable",
              "/not-for-me",
              "/user",
              "/classic",
              "/user/:id"
            ]}
          >
            <TolaatNavbar
              allUsers={this.state.allUsers}
              activeUser={this.state.activeUser}
              logout={this.logout}
              friendResult={this.handleFriendResult}
            />
          </Route>
          <Container>
            <Route exact path="/">
              <HomePage
                activeUser={this.state.activeUser}
                book={this.state.allBooks}
              />
            </Route>

            <Route exact path="/forever">
              <Category
                activeUser={this.state.activeUser}
                book={this.state.allBooks}
                title="?????????? ?????????? ???????? ??????????"
                category="forever"
              />
            </Route>

            <Route exact path="/week">
              <Category
                activeUser={this.state.activeUser}
                book={this.state.allBooks}
                title="?????????? ???????????? ?????? ?????????? ???????? ????????????"
                category="week"
              />
            </Route>

            <Route exact path="/reasonable">
              <Category
                activeUser={this.state.activeUser}
                book={this.state.allBooks}
                title="?????????? ?????????????? ?????? ?????????? ??????????"
                category="reasonable"
              />
            </Route>

            <Route exact path="/not-for-me">
              <Category
                activeUser={this.state.activeUser}
                book={this.state.allBooks}
                title="?????? ?????????????? ??????: ???? ???? ??????????"
                category="not-for-me"
              />
            </Route>

            <Route exact path="/books/:id">
              <SingleBook
                activeUser={this.state.activeUser}
                allBooks={this.state.allBooks}
                favorite={this.addBook}
              />
            </Route>

            <Route exact path="/signup">
              <Signup addUser={this.addUser} allUsers={this.state.allUsers} />
            </Route>

            <Route exact path="/login">
              <Login allUsers={this.state.allUsers} login={this.login} />
            </Route>

            <Route exact path="/user/:id">
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
            <Modal.Title>?????? ?????? ?????? ???????????</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ?????????? ???????? ???????????? ?????????? ???? ???????????? ???????????????? ????????? ???????? ?????????? ??????????????
            ???????????? ??????????????
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              ????????
            </Button>
            <Button variant="primary" onClick={this.handlOpenAccount}>
              ?????? ??????????
            </Button>
          </Modal.Footer>
        </Modal>
      </HashRouter>
    );
  }
}

export default App;
