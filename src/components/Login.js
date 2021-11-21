import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            let response = await axios.post('http://localhost:8000/login', { email, password });
            console.log(response);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h2>Login</h2>
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
                    onChange = { e => setPassword(e.target.value) }
				/>
				<input 
					type="submit" 
					value="Login"
				/>
			</form>
            <Link to="/signup">Sign up for a new account</Link>
        </div>
    )
}