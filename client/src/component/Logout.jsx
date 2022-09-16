import {useState} from 'react'
import { Redirect } from "react-router-dom";

const Logout = ({ user, setUser }) => {
    const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:3000/logout", {
            method: "DELETE"
        })
        setUser("undefined")
        localStorage.setItem('JWT', "undefined")
        // go to login once logged out
   }

  return (
   <div id="logout-component">
    <br />
    <h1 id='welcome'>Ready to leave Troll School?</h1>
        <form onSubmit={handleSubmit}>
            <input 
                className='input' 
                type='submit'
                id="logout"
                value={"Going on an adventure - will be back later!"}
            ></input><br />
        </form>
  </div>
  );
}

export default Logout;

