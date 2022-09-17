import { useState, useContext } from "react";

const SignUpForm = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fetchSignup = async () => {
      let res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
          avatar: avatar,
        }),
      });
      let req = await res.json();
      setUser(req);
      localStorage.setItem("JWT", req.jwt);
    };
    fetchSignup();
    //redirect to home or login
  }

  return (
    <>
      <div id="signup">
    
        <form onSubmit={handleSubmit}>
          <label className="signupLabel">name: </label>
          <input
            className="input"
            type="text"
            id="name"
            autoComplete="off"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
                ></input>
          <br />

          <label className="signupLabel">email: </label>
          <input
            className="input"
            type="email"
            id="email"
            autoComplete="off"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />

          <label className="signupLabel">username: </label>
          <input
            className="input"
            type="text"
            id="username"
            autoComplete="off"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />

          <label className="signupLabel">password: </label>
          <input
            className="input"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />

          <label className="signupLabel">confirm password: </label>
          <input
            className="input"
            type="password"
            id="password_confirmation"
            autoComplete="current-password"
            placeholder="confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
          <br />

          <label className="signupLabel">avatar: </label>
          <input
            className="input"
            type="text"
            id="avatar"
            autoComplete="off"
            placeholder="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          ></input>
          <br />

          <button type="submit">Sign me up!</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
