import {useState} from 'react'
import { Redirect } from "react-router-dom";

const SignUpForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
    setIsLoading(true);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
        avatar: avatar
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
    // return <Redirect to="/login" />
  }

    return (
        <>
        <div id='signup'>
            <form onSubmit={handleSubmit}>
                <h2>email</h2>
                <input 
                    className='input' 
                    type='email'
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input><br />

                <h2>username</h2>
                <input 
                    className='input' 
                    type='text'
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input><br />

                <h2>password</h2>
                <input 
                    className='input' 
                    type='password'
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></input><br />

                <h2>password confirmation</h2>
                <input 
                    className='input' 
                    type="password"
                    id="password_confirmation"
                    autoComplete="current-password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    ></input><br />

                <h2>avatar</h2>
                <input 
                    className='input' 
                    type='text'
                    id="avatar"
                    autoComplete="off"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                ></input><br />

                <button type='submit'>Sign me up!</button>
            </form>
            <br />
        </div>
        </>
    )
}

export default SignUpForm;
