import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <ul 
                className="navbar__list" 
                style={{listStyle: 'none', display: 'inline'}}    
            >
                <li className="navbar__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link to="about">About</Link>
                </li>
                <li className="navbar__item">
                    <Link to="login">Login</Link>
                </li>
                <li className="navbar__item">
                    <Link to="signup">Signup</Link>
                </li>
								{
									props.user !== null ? 
										<li className="navbar__item">
												<Link to="dashboard">Dashboard</Link>
										</li>
								 	: null
								}
            </ul>
        </div>
    )
}