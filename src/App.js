import './App.css';
import Auth from './pages/Auth';
import Login from './components/Login'
import Signup from './components/Signup'
import Layout from './components/Layout';
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
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
