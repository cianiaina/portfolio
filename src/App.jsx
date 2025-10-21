// src/App.jsx
import React from 'react';
import './index.css'; // Styles globaux

// Importez tous vos composants
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <div className="separator">▼ ▲ ▼</div> {/* Séparateur visuel */}
      <About />
      <div className="separator">▼ ▲ ▼</div>
      <Skills />
      <div className="separator">▼ ▲ ▼</div>
      <Projects />
      <div className="separator">▼ ▲ ▼</div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;