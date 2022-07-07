
import React from "react";
// import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Components from "./components/Components";

// import JoblyApi from "./JoblyApi";
// import UserContext from "./UserContext";

import './App.css';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Components />
      </div>
    </BrowserRouter>
  );
}

export default App;
