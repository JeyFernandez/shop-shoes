import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './screen/Home';
import Contact from './screen/Contact';
import './App.css';

function Navbar() {
  return (
    <nav className='nav'>
      <Link className='Link' to="/">Home</Link>
      <Link className='Link' to="/contact">Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header className='container-nav'>
          <h1 className='title'>Shoes Shop</h1>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
