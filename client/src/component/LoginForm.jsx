import {useState} from 'react'

const LoginForm = () => {
    return (
        <>
        <div id='login'>
        {/* <h1 id='welcome'>Welcome to Troll Tutor!</h1> */}
        {/* <h2>If you're already signed up to be a Troll tutor, log in here.</h2> */}
            <form>
                <h2>username</h2>
                <input class='input' type='text'></input><br />
                <h2>password</h2><h5>(ssshhhh!)</h5>
                <input class='input' type='password'></input><br />
                <button type='submit'>Let's go!</button>
            </form>
        </div>
        </>
    )
}

export default LoginForm;
