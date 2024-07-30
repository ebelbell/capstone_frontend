import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className="Navbar">
            <div className="navbar-container">
                {/* utilize react-router. The link will contain Navbar paths */}
                <Link to="/" className="nav-link">Home</Link>
                {/* Recipe Form for creating and updating */}
                <Link to="/recipe-form" className="nav-link">Create A Recipe </Link>
                {/* Recipe Details for showing a recipe */}
                <Link to="/recipe/:id" className="nav-link">Your Recipes</Link>
                <Link to="/about" className="nav-link">About</Link> 

            </div>
        </nav>
    </>
  )
}

export default Navbar;