import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';

const Auth = props => {
	const [authView, setAuthView] = useState(props.authView)
	if (authView === 'login') {
		return <Login authView={authView} setAuthView={setAuthView} />
	}
	if (authView === 'signup') {
		return <Signup authView={authView} setAuthView={setAuthView} />
	}
}

export default Auth;