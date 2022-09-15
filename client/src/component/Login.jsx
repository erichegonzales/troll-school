import {useState} from 'react'

const Login = () => {
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');

  return (
    <div id="login-component">
      <div id='login'>
      <h2 id='welcome'>Login / Signup</h2>
      <h2>If you have a user account, log in here.</h2>
      <form>
        <h2>email:</h2>
      <input className='input' type='email' placeholder="name@example.com"></input><br />
      <h2>password:</h2>
      <input className='input' type='password' placeholder="password"></input><br />
      <button type='submit'>Let's go!</button>
      </form>
      </div>
      <div id='signup'>
      <h2>If you don't have a user account, <br /> ask a parent or guardian to enter a valid email address here!</h2>
      <form>
        <h2>email</h2>
          <input className='input' type='email' placeholder="name@example.com"></input><br />
      <h2>password</h2>
          <input className='input' type='password' placeholder="password"></input><br />
      <button type='submit'>Sign me up!</button>
      </form>

        

      </div>
    </div>
  );
}

export default Login;
