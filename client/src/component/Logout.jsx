import {useState} from 'react'
import { Redirect } from "react-router-dom";

const Logout = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:3000/logout", {
            method: "DELETE"
            })
        }
        // return <Redirect to="/login" />
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
                value={isLoading ? "Loading..." : "Going on an adventure - will be back later!"}
            ></input><br />
        </form>
  </div>
  );
}

export default Logout;

