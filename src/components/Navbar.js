import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    // State to control the expansion/collapse of the navbar on mobile
    const [expandNavbar, setExpandNavbar] = useState(false);

    // Get the current location using the useLocation hook
    const location = useLocation();

    // Reset the navbar expansion state when the location changes (e.g., when navigating between pages)
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    // Function to determine if a link is active based on the current location
    const isLinkActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            {/* Logo or title of the website */}
            <h1>Juan Cruz Garcia</h1>

            {/* Mobile toggle button */}
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    <ReorderIcon />
                </button>
            </div>

            {/* Navigation links */}
            <nav className='links'>
                <Link to='/' className={isLinkActive('/')} >About</Link>
                <Link to='/portfolio' className={isLinkActive('/portfolio')} >Portfolio</Link>
                <Link to='/contact' className={isLinkActive('/contact')} >Contact</Link>
                <Link to='/resume' className={isLinkActive('/resume')} >Resume</Link>
            </nav>
        </div>
    );
}

export default Navbar;