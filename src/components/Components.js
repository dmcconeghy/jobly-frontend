import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import Homepage from "./Homepage";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";

function Components() {
    return (
        <div>
            
            <Routes>
                <Route path ="/" element={<Homepage/>} />
                <Route path ="/companies" element={<CompaniesList />} />
                <Route path ="/companies/:handle" element={<CompanyDetails />} />
                <Route path ="/jobs" element={<JobsList/>} />
                <Route path ="/login" element={<LoginForm/>} />
                <Route path ="/profile" element={<ProfileForm/>} />
                <Route path ="/signup" element={<SignupForm/>} />
                <Route path = "*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default Components;
