export default function Login(props) {
    return (
        <div>
            <h2>Login</h2>
			<form action="" method="POST">
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
				<input 
					type="submit" 
					value="Login"
				/>
			</form>
            <p>
                <a href="#" onClick={() => props.setAuthView('signup')}>Sign up for a new account</a>
            </p>
        </div>
    )
}