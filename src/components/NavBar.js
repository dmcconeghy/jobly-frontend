import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import "./NavBar.css";

function NavBar({logout}) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <>
            <NavLink to="/companies" className="nav-link">Companies</NavLink>
            <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
            <NavLink to="/" onClick= { logout }  className="nav-link">
                Sign Out ({ currentUser.username })
            </NavLink>
            </>
        )
    }

    function loggedOutNav() {
        return (
            <>
            <NavLink to="/login" className="nav-link">Sign In</NavLink>
            <NavLink to="/signup" className="nav-link">Register</NavLink>
            </>
        )
    }

    return (
        <nav className='navbar'>
            <NavLink to="/" className="nav-link">Home</NavLink>
            { currentUser ? loggedInNav() : loggedOutNav() }
        </nav>
    );
}

export default NavBar;