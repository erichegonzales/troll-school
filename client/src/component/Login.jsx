import {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =u seState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    // setIsLoading(true)

    // const getUsers = async () => {
    //   let res = await fetch('/login', {

    //   })
    //   let req = await res.json()
    // }
  }

  return (
    <div id="login-component">

      <h1 id='welcome'>Welcome to Troll Tutor!</h1>
      <h2>If you're already signed up to be a Troll tutor, log in here.</h2>
     
      <div id='login'>
      <form onSubmit={handleSubmit}>
        <h2>email</h2>
      <input class='input' type='email'></input><br />
      <h2>password</h2><h5>(ssshhhh!)</h5>
      <input class='input' type='password'></input><br />
      <button type='submit'>Let's go!</button>
      </form>
      </div>

      <div id='signup'>
      <h2>If you haven't signed up yet but want to, ask a parent or guardian for permission and enter your email here!</h2>
      <form>
        <h2>email</h2>
      <input class='input' type='email'></input><br />
      <h2>password</h2>
      <input class='input' type='password'></input><br />
      <button type='submit'>Sign me up!</button>
      </form>

        

      </div>
    </div>
  );
}

export default Login;
