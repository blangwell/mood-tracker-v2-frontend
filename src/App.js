import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup/>} />
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
