import { useState, useContext } from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import UserContext from "./App"

const Login = ({ user, setUser }) => {
  // const user = useContext(UserContext);
  // console.log(user)
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div id="login-component">
      <div id="login">
      <h1 id='welcome'>Welcome to Troll School!</h1>
      {showLogin ? (
        <>
          <h2>Log in to your account:</h2>
          <LoginForm user={user} setUser={setUser} />
          {/* <br /> */}
          <h2>If you don't have an account, <br /> ask a parent or guardian for permission click "sign me up!"</h2>
          <input type='submit' value='Sign Up' onClick={() => setShowLogin(false)} />
        </>
      ) : (
        <>
          <h1>Create a new account:</h1>
          <SignUpForm user={user} setUser={setUser} />
          <h2>If you're already signed up to be a Troll tutor, log in here!</h2>
          <input type='submit' value='Log In' onClick={() => setShowLogin(true)} />
        </>
      )}
      </div>
    </div>
  );
}

export default Login;

