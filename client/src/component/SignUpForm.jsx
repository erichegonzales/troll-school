import {useState} from 'react'

const SignUpForm = () => {
    return (
        <>
        <div id='signup'>
            {/* <h2>If you haven't signed up yet but want to, ask a parent or guardian for permission and enter your email here!</h2> */}
            <form>
                <h2>email</h2>
                <input class='input' type='email'></input><br />
                <h2>username</h2>
                <input class='input' type='text'></input><br />
                <h2>password</h2>
                <input class='input' type='password'></input><br />
                <h2>avatar</h2>
                <input class='input' type='text'></input><br />
                <button type='submit'>Sign me up!</button>
            </form>
        </div>
        </>
    )
}

export default SignUpForm;
