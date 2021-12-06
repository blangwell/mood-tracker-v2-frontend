import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            let response = await axios.post('http://localhost:8000/signup', { email, password, confirmPassword });
            console.log(response);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="email@site.com"
                    onChange={ e => setEmail(e.target.value) }
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={ e => setPassword(e.target.value) }
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="confirm password"
                    onChange={ e => setConfirmPassword(e.target.value) }
                />
                <input 
                    type="submit" 
                    value="Signup"
                />
            </form>
            <br/>
            <Link to="/login">Already have an account? Login</Link>
        </div>
    )
}