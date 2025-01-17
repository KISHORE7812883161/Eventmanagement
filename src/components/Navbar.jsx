// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/create-event">Create Event</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/calendar">My Calendar</Link>
    </nav>
  );
};

export default Navbar;
