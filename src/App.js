import React from 'react';
import NavBar from "./components/Header/NavBar"
import Wrapper from "./components/Body/Wrapper"
import './App.css';
var express = require('express')

function App() {
  return (
    <div className="App">
      <NavBar />
      <Wrapper />
    </div>
  );
}

export default App;
