import './App.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/courses">
          <Courses/>
        </Route>
        <Route path="/homePage">
          <HomePage/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
