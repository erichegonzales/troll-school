import {useState} from 'react'

const SignUpForm = () => {
    return (
        <>
        <div id='signup'>
            <form>
                <h2>email</h2>
                <input 
                    class='input' 
                    type='email'

                    
                ></input><br />
                <h2>username</h2>
                <input class='input' type='text'></input><br />
                <h2>password</h2>
                <input class='input' type='password'></input><br />
                <h2>avatar</h2>
                <input class='input' type='text'></input><br />
                <button type='submit'>Sign me up!</button>
            </form>
            <br />
        </div>
        </>
    )
}

export default SignUpForm;
