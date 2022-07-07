import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";

function Homepage() {
    const { currentUser } = useContext(UserContext);

    function loggedInHomepage() {
        return (
            <>
            <h1>Welcome Back, {currentUser.firstName || currentUser.username}</h1>
            <h6>You are logged in.</h6>
        </>
        )
    }

    function loggedOutHomepage() {
        return (
            <div>
                <h3>You are not logged in.</h3>
            
                <Link to="/login">Log In</Link> 
                <br></br>
                <Link to="/signup">Sign Up</Link>
            </div>
        );
    }

  return (
    <div>
      <h1>Jobly</h1>
      <p> We've got the jobs. </p>
      { currentUser ? loggedInHomepage() : loggedOutHomepage() }
    </div>
  );
}

export default Homepage;