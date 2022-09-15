import {useState} from 'react'
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

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
        }})
      })
      let req = await res.json()
      console.log(req)
    }

    fetchLogin()

    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // })
    // .then((res) => res.json())
    // .then((req) => console.log(req))



    // setIsLoading(true);
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // })
    // .then((r) => console.log(r))

    // .then((r) => {
      // setIsLoading(false);
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //   } 
    // });
    // <Redirect to="/" />
  }

    return (
        <>
        <div id='login'>
            <form onSubmit={handleSubmit}>
                <h2>username</h2>
                <input 
                    className='input' 
                    type='text'
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input><br />
                <h2>password</h2><h5>(ssshhhh!)</h5>
                <input 
                    className='input' 
                    type='password'
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input><br />
                <button type='submit'>
                    {/* {isLoading ? "Loading..." : "Let's go!"} */}
                    Let's go!
                </button>
            </form>
        </div>
        </>
    )
}

export default LoginForm;
