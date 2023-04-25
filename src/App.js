import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import CV from './components/pages/Cv';
import About from './components/pages/About';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/cv" exact Component={CV} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
      </Router>
    </>


  );
}

export default App;
