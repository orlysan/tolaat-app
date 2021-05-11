import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import TolaatNavbar from './Components/TolaatNavbar';
import ForeverBook from './Pages/ForeverBooks';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserProfile from './Pages/UserProfile';
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="p-app">
      <TolaatNavbar />
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

export default App;
