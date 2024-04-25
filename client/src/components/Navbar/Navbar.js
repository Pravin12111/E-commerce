// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

import './Navbar.css'; // Import your CSS file

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="logo">
                <img src="https://t3.ftcdn.net/jpg/06/16/32/56/360_F_616325659_BOYDbtlbIaa7g2s81HfulxujPcPLZHbj.jpg" alt="E-commerce logo" className='e-logo' />
        </div>
        <div className="nav-links">
        <Link to="/"> 🏠 Home</Link>
        <Link to="/login"> 👤 Login</Link>
        <Link to="/signup"> 👤 Signup</Link>
        <Link to="/orders">🛒 Orders</Link>
        </div>
    </nav>
    );
};

export default Navbar;
