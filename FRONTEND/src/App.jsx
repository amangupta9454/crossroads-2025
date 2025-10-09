import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import EventRegistration from './Components/EventRegistration';
import Home from './Components/Home';
import Event from './Components/Event';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Schedule from './Components/Schedule';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Event />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          
          <Route path='/event-registration' element={<EventRegistration />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
};

export default App;