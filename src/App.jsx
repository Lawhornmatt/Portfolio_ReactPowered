import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './CSS/App.css';

import About from './components/About.jsx'
import Homepage from './components/Homepage.jsx'
import Pedestal from './components/Pedestal.jsx'
import Menu from './components/Menu.jsx'
import Myfooter from './components/Footer.jsx'
import Emailform from './components/Contact.jsx'
import Resume from './components/Resume.jsx'
import Password from './components/Password.jsx'
import Weather from './components/Weather.jsx'
import Quiz from './components/Quiz.jsx'
import Schedule from './components/Schedule.jsx'
import Recipe from './components/Recipe.jsx'
import Blog from './components/Blog.jsx'

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
          <Route 
            path="/contact" 
            element={<Emailform/>}
          />
          <Route 
            path="/resume" 
            element={<Resume/>}
          />
          <Route 
            path="/password" 
            element={<Password/>}
          />
          <Route 
            path="/weather" 
            element={<Weather/>}
          />
          <Route 
            path="/quiz" 
            element={<Quiz/>}
          />
          <Route 
            path="/blog" 
            element={<Blog/>}
          />
          <Route 
            path="/recipe" 
            element={<Recipe/>}
          />
          <Route 
            path="/schedule" 
            element={<Schedule/>}
          />
        </Routes>
      </Router>
      <Myfooter />
    </div>

  );
};

export default App
