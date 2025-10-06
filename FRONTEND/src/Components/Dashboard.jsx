import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo) {
        navigate('/login');
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const res = await axios.get('https://crossroads-2025.onrender.com/api/auth/profile', config);
        setUser(res.data);
      } catch  {
        localStorage.removeItem('userInfo');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;