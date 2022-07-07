import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";


function SignupForm( { signup } ) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(event){
        event.preventDefault();
        let res = await signup(formData);
        if (res.success) {
            navigate("/");
        } else {
            setFormErrors(res.errors)
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(data => ({...data,
            [name]: value
        }));
    }

  return (
    <div>
        <h1>Sign up</h1>
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
        <div className="form-group">
            <label>First Name</label>
            <input
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        {formErrors.length ? (
            <Alert type="danger" messages={formErrors} />
        ) : null}
        <div className="form-group">
            <button type="submit">Sign Up</button>
        </div>
        </form>
    </div>
  );
} 

export default SignupForm;