import React from 'react';
import './SignUp.css';
import { FaUser, FaLock } from "react-icons/fa";


const SignUp = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className='instruction'>
                <p>Create an Account</p>
                </div>
                <div className="input-box">
                    <input type="text" 
                    placeholder='Email' required/>
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder='Create Password' required/>
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder='Confirm Password' required/>
                    <FaLock className='icon' />
                </div>

                <div className="rememberme">
                    <label><input type="checkbox"/>Remember me</label>
                </div>

                <button type="submit">Sign Up</button>

                <div className="SignIn-Link">
                    <p>Already have an account? <a href=".">Sign In</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;