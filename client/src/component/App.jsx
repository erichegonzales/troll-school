import './App.css';
import Login from './Login'

import './Navbar.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import  Navbar from './Navbar';
import MappScreen from './MappScreen';
import Quizzes from './Quizzes';
import { useState, useEffect } from 'react';

const App = () => {

 const[quiz, setQuiz] = useState([])
    

//  useEffect(() => {
//         fetch('http://localhost:3000/questions')
//         .then(req => req.json())
//         .then(res => setQuiz(res))
//     }, [])


    

    useEffect(() => {
      const fetchUrl = async () => {
      const request = await fetch('http://localhost:3000/questions')
      const resp = await request.json()
      setQuiz(resp)
      console.log("hi")
    }
      fetchUrl()
    },[])





  return (

 

    <div>
         {console.log(quiz)}
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
        <Route exact path="/courses/math-mapp/quizzes">
          <Quizzes />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
