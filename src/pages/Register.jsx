import React from 'react'
import Add from '../img/addAvatar.png'
const Register = () => {
    return (

        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <input type='file' id='file' className='fileInput' />
                    <label htmlFor='file'>
                        <img src={Add}/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}
export default Register;