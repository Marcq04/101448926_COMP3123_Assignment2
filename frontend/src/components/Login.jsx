import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login error:', error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Already logged out.');
      } else {
        alert('Logged out successfully!');
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out.');
    }
  };
  
  

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;


