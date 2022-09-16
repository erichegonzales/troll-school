import './App.css';
import Login from './Login'
import Logout from './Logout'
import React, { useEffect, useState } from "react";
import './Category.css';
import './Navbar.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import  Navbar from './Navbar';
import MathMapp from './MathMapp';
import SpellingMapp from './SpellingMapp';
import LessonTemplate from './LessonTemplate';
import ArtMap from './ArtMap';
import HistoryMap from './HistoryMap';
// import MappScreen from './MappScreen';

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
        <Route exact path="/logout">
          <Logout user={user} setUser={setUser} />
        </Route>
        <Route exact path="/courses/math-mapp">
          <MathMapp />
        </Route>
        <Route exact path="/courses/spelling-mapp">
          <SpellingMapp />
        </Route>
        <Route exact path="/courses/art-mapp">
          <ArtMap />
        </Route>
        <Route exact path="/courses/history-mapp">
          <HistoryMap />
        </Route>
        <Route exact path="/courses/:id/quizzes/:quid">
          <LessonTemplate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
