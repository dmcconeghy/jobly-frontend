import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand">
            Jobly
            </NavLink>
            <NavLink to="/companies" className="nav-item nav-link ml-auto">
            Companies
            </NavLink>
            <NavLink to="/jobs" className="nav-item nav-link">
            Jobs
            </NavLink>
            <NavLink to="/login" className="nav-item nav-link">
            Log In
            </NavLink>
            <NavLink to="/signup" className="nav-item nav-link">
            Sign Up
            </NavLink>
            <NavLink to="/profile" className="nav-item nav-link">
            Profile
            </NavLink>
        </nav>
    );
}

export default NavBar;





// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import userContext from 'UserContext';

// function NavBar({logout}) {
//     const { currentUser } = useContext(userContext);

//     function loggedInNav() {
//         return (
//             <>
//             <NavLink to="/companies">Companies</NavLink>
//             <NavLink to="/jobs">Jobs</NavLink>
//             <NavLink to="/profile">Profile</NavLink>
//             <NavLink to="/" onClick= { logout } >Logout
//                 Log Out = { currentUser.firstName || currentUser.username }
//             </NavLink>
//             </>
//         )
//     }

//     function loggedOutNav() {
//         return (
//             <>
//             <NavLink to="/login">Log In</NavLink>
//             <NavLink to="/signup">Sign Up</NavLink>
//             </>
//         )
//     }

//     return (
//         <nav className='navbar'>
//             <NavLink to="/">Jobly</NavLink>
//             { currentUser ? loggedInNav() : loggedOutNav() }
//         </nav>
//     );
// }

// export default NavBar;