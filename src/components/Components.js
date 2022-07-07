import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CompaniesList from "./CompaniesList";
import CompanyDetails from "./CompanyDetails";
import Homepage from "./Homepage";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";
import PrivateRoute from "./PrivateRoute.js";


function Components({ signup, login }) {
    return (
        <div>
            
            <Routes>
                <Route path ="/" element={
                    <Homepage/>} />
                <Route path ="/companies" element={
                    <PrivateRoute><CompaniesList /></PrivateRoute>} />
                <Route path ="/companies/:handle" element={
                    <PrivateRoute><CompanyDetails /></PrivateRoute>} />
                <Route path ="/jobs" element={
                    <PrivateRoute><JobsList/></PrivateRoute>} />
                <Route path ="/login" element={
                    <LoginForm login = { login }/> }/>
                <Route path ="/profile" element={
                    <PrivateRoute><ProfileForm/></PrivateRoute>} />
                <Route path ="/signup" element={
                    <SignupForm signup = { signup }/>} />
                <Route path = "*" element={
                    <Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default Components;
