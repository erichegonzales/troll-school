import {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
   <div>
    <h1 id='welcome'>Welcome to Troll Tutor!</h1>
    {showLogin ? (
    <>
      <h2>Log in to your account:</h2>
      <LoginForm onLogin={onLogin} />
      <br/>
      <h2>If you haven't signed up yet but want to, ask a parent or guardian for permission, and sign up here!</h2>
      <input type='submit' value='Sign Up' onClick={() => setShowLogin(false)}/>
    </>
    ) : (
    <>
      <h2>Sign up for an account:</h2>
      <SignUpForm onLogin={onLogin} />
      <h2>If you're already signed up to be a Troll tutor, log in here!</h2>
            <input type='submit' value='Log In' onClick={() => setShowLogin(true)}/>
    </>
    )}
  </div>
  );
}

export default Login;

