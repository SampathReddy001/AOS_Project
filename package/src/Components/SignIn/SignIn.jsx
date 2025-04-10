import React from 'react';
import './SignIn.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setMessage('❌ Please enter a valid email');
            return;
        }

        if (password.trim() === '') {
            setMessage('❌ Password cannot be empty');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signin', {
                email,
                password
            });
            setMessage(`✅ ${response.data.message}`);
            // You can redirect to dashboard if successful
            // navigate('/dashboard');
        } catch (err) {
            setMessage(err.response?.data?.message || 'Sign in failed');
        }
    };

    const handleGoToSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className='instruction'>
                <p>Enter your email and password</p>
                </div>

                <div className="input-box">
                    <input type="text" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required/>
                    <FaUser className='icon' />
                </div>

                <div className="input-box">
                    <input type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                    <FaLock className='icon' />
                </div>

                <div className="rememberme-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <br></br>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit">Login</button>

                <div className="SignUp-Link">
                    <p>Don't have an account? <a href="./SignUp">Sign Up</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;