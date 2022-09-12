import './App.css';
import Login from './Login'
import './Category.css';
import './Navbar.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import  Navbar from './Navbar';
import MathMapp from './MathMapp';
import SpellingMapp from './SpellingMapp';

const App = () => {



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
          <MathMapp />
        </Route>
        <Route exact path="/courses/spelling-mapp">
          <SpellingMapp />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
