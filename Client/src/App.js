import logo from './logo.svg';
import './App.css';
import Home from "./app/features/home/home.js"
import { LandingPage } from './app/features/home/LandingPage.js';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />}/>   
      <Route path="/weather" element={<Home />}/>
       </Routes>
    </div>
  );
}

export default App;
