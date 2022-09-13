import './App.css';
import Login from './Login'
import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import  Navbar from './Navbar';
import MappScreen from './MappScreen';


const App = () => {
  const [user, setUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/courses">
          <Courses/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/courses/math-mapp">
          <MappScreen />
        </Route>
      </Switch>
    </div>
    );
  }

export default App;
