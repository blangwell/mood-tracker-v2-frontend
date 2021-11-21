import { Link } from 'react-router-dom';

export default function Signup(props) {
    return (
        <div>
            <h2>Sign Up</h2>
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="email@site.com"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm password"
            />
            <input 
                type="submit" 
                value="Login"
            />
            <br/>
            <Link to="/login">Already have an account? Login</Link>
        </div>
    )
}