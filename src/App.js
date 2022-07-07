import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Components from "./components/Components";
import JoblyApi from "./api";
import { decodeToken } from "react-jwt";
import UserContext from "./UserContext";
import useLocalStorage from "./useLocalStorage.js";
import './App.css';

export const TOKEN_STORAGE_KEY = "jobly-token";


function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect( 
    function loadUser() {
      async function getCurrentUser() {
        if (token) {
          
          try {
            let { username } = decodeToken(token);
            JoblyApi.token = token;
            
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (error) {
            console.error("error getting current user", error);
            setCurrentUser(null);
          }
        }
      }
      getCurrentUser();
    }, [token]
  );
        
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup error", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login error", errors);
      return { success: false, errors };
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null)
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser}}>

        <div className="App">
          <NavBar logout={ logout } />
          <Components signup={ signup } login={ login } />
        </div>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
