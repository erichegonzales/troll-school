import './Navbar.css';
import { Switch, Route } from 'react-router-dom'
import  Courses from './Courses'
import  HomePage from './HomePage'
import  Profile from './Profile'
import  Navbar from './Navbar';
import MappScreen from './MappScreen';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/courses">
          <Courses/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/courses/math-mapp">
          <MappScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
