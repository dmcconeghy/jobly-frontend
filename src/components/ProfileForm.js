import React, { useState, useContext } from "react";
import JoblyApi from "../api";
import Alert from "./Alert";
import UserContext from "../UserContext";
import "./ProfileForm.css";

function ProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    })

    const [formErrors, setFormErrors] = useState([]);
    const [isSaved, setIsSaved] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
    
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        }

        let username = formData.username;
        let updatedUser; 

        try {
            updatedUser = await JoblyApi.updateUser(username, profileData);
        } catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormData(data => ({ ...data, password: "" }));
        setFormErrors([]);
        setIsSaved(true);
        setCurrentUser(updatedUser);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
        setFormErrors([]);
    }

  return (
    <div>
        <h1>Change Your Profile.</h1>
        <div className="profile-update">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>username</label>
                    <input
                        name="username"
                        className="form-control"
                        value={formData.username}
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
                <div className="form-group">
                    <label>Confirm Password</label>
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
                {isSaved ? (
                    <Alert type="success" messages={["Profile updated!"]} />
                ) : null}
                <div className="form-group">
                    <button className="btn btn-primary">Save Profile</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default ProfileForm;