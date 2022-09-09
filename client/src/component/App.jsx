import './App.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
        <Route path="/courses">
          <Courses/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/about">
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
