import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import EventRegistration from './Components/EventRegistration';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Login />} />
          <Route path='/event-registration' element={<EventRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;