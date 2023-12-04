// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

import './Navbar.css'; // Import your CSS file

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/">Home</Link>
        </div>
        <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/orders">Orders</Link>
        </div>
    </nav>
    );
};

export default Navbar;
