import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './CSS/App.css';

import About from './components/About.jsx'
import Homepage from './components/Homepage.jsx'
import Pedestal from './components/Pedestal.jsx'
import Menu from './components/Menu.jsx'

function App() {

  return (
    <div>
      <Menu />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<About/>}
          />
          <Route 
            path="/about" 
            element={<About/>}
          />
          <Route 
            path="/project" 
            element={<Pedestal/>}
          />
        </Routes>
      </Router>
    </div>

  );
};

export default App
