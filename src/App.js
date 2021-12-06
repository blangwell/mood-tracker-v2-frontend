import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import setAuthHeader from './utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthHeader(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout handleLogout={handleLogout} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="signup" element={<Signup/>} />
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
