import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Login({history}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', data.token);
      Navigate('/projects');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };
  

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
