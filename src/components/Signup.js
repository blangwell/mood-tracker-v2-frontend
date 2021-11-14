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
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirmPassword"
            />
            <input 
                type="submit" 
                value="Login"
            />

            <p>
                Already have an account? 
                <a href="#" onClick={() => props.setAuthView('login')}>Login</a>
            </p>
        </div>
    )
}