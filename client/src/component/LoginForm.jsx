import {useState} from 'react'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } 
    //   else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    });
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
                    {isLoading ? "Loading..." : "Let's go!"}
                </button>
            </form>
        </div>
        </>
    )
}

export default LoginForm;
