import useState from 'react'


function Login() {


  return (
    <div>
      <h1 id='welcome'>Welcome to Troll Tutor!</h1>
      <h2>If you're already signed up to be a Troll tutor, log in here.</h2>
      <div id='login'>
      <form>
        <h2>email</h2>
      <input class='input' type='email'></input><br />
      <h2>password</h2><h3>(ssshhhh!)</h3>
      <input class='input' type='password'></input><br />
      <button type='submit'>Let's go!</button>
      </form>
      </div>
      
      <h2>If you haven't signed up yet but want to, ask a parent or guardian for permission and enter your email here!</h2>
    </div>
  );
}

export default Login;
