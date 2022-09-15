import {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Login = () => {
  
  return (
   <div id="login-component">
    <h1 id='welcome'>Welcome to Troll School!</h1>
    <>
      <h2>Log in to your account:</h2>
      <LoginForm />
      <br/>
      <h2>If you haven't signed up yet but want to, <br /> ask a parent or guardian for permission and sign up here!</h2>
      <input type='submit' value='Sign Up' onClick={() => setShowLogin(false)}/>
    </>
   
    <>
      <h2>Sign up for an account:</h2>
      <SignUpForm />
      <h2>If you're already signed up to be a Troll tutor, log in here!</h2>
            <input type='submit' value='Log In' onClick={() => setShowLogin(true)}/>
    </>
  
  </div>
  );
}

export default Login;

