import React, { useState, useContext } from "react";
import Alert from "./Alert";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../UserContext";


function LoginForm({login}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    const { currentUser } = useContext(UserContext);

    if (currentUser) {
        return <Navigate to="/" />;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let res = await login(formData);
        if (res.success) {
            navigate("/");
        } else {
            setFormErrors(res.errors);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

  return (
    <div> 
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input
                    name="username"
                    className="form-control"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
            ) : null}

            <div className="form-group">
                <button type="submit" onSubmit={handleSubmit}>Login</button>
                {/* Do I need button to contain onSubmit={handleSubmit} too? */}
            </div>
        </form>
    </div>
  );
}

export default LoginForm;