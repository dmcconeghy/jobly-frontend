import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ path, children }) {
    const { currentUser } = useContext(UserContext);

    if (!currentUser){
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default PrivateRoute