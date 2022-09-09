import Login from './Login'

function HomePage() {
  return (
    <div>
      <h1 id='welcome'>Welcome to Troll Tutor!</h1>
      <h2>If you're already signed up to be a Troll tutor, log in here.</h2>
      <Login />
      <h2>If you haven't signed up yet but want to, ask a parent or guardian for permission and enter your email here!</h2>
    </div>
  );
}

export default HomePage;
