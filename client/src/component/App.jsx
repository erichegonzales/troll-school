import './App.css';
import Login from './Login'
import Logout from './Logout'
import React, { useEffect, useState, createContext } from "react";
import './Navbar.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import  Navbar from './Navbar';
import MappScreen from './MappScreen';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
  const fetchUser = async () => {
    let res = await fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("JWT")}`
    }})
    let req = await res.json()
    setUser(req.user)
  }
  fetchUser()
}, [])

  // if (user === undefined) return <Login onLogin={setUser} />; if user not logged in, go to home page

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>
        <Route exact path="/courses">
          <Courses user={user} />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} />
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/courses/math-mapp">
          <MappScreen user={user} />
        </Route>
         <Route exact path="/logout">
          <Logout user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
    );
  }

export default App;
