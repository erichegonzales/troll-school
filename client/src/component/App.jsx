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
import LessonTemplate from './LessonTemplate';
import ArtMap from './ArtMap';
import HistoryMap from './HistoryMap';

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
