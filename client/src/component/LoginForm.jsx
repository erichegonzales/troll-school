import { useState } from 'react'
import HomePage from './HomePage';

const LoginForm = ({ user, setUser }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // if (user === !undefined) redirect to profile if user is signed in

  function handleSubmit(e) {
    e.preventDefault();
    const fetchLogin = async () => {
      let res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      })
      let req = await res.json()
      setUser(req)
      localStorage.setItem('JWT', req.jwt);
    }
    fetchLogin()
    // redirect home page
  }

  return (
    <>
    
        <form onSubmit={handleSubmit}>
          <label className='signupLabel'>username</label>
          <input
            className='input'
            type='text'
            id="username"
            autoComplete="off"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input><br />
        <label className='signupLabel'>password</label>
          <input
            className='input'
            type='password'
            id="password"
            placeholder="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input><br />
          <button type='submit'>Let's go!
            {/* {isLoading ? "Loading..." : "Let's go!"} */}
          </button>
        </form>
    </>
  )
}

export default LoginForm;
