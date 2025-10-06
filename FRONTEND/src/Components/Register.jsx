import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('https://crossroads-2025.onrender.com/api/auth/register', { name, email, mobile, password });
      navigate('/login');
    } catch (err) {
      setError(err.response.data.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Mobile (10 digits)" value={mobile} onChange={(e) => setMobile(e.target.value)} pattern="[6-9]{1}[0-9]{9}" required />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10, top: 10 }}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : 'Register'}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;