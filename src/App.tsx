import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/screen/Home';
import Contact from './components/screen/Contact';
import './App.css';
import Catalogos from './components/screen/Catalogos';
import Ofertas from './components/screen/Ofertas';
import Nuevos from './components/screen/Nuevos';
import Categorias from './components/screen/Categorias';
import Marcas from './components/screen/Marcas';
import Carrito from './components/screen/Carrito';
import Login from './components/screen/Login';

function Navbar() {
  return (
    <nav className='nav'>
      <Link className='Link' to="/">Home</Link>
      <Link className='Link' to="/catalogos">Catalogos</Link>
      <Link className='Link' to="/ofertas">Ofertas</Link>
      <Link className='Link' to="/nuevos">Nuevos</Link>
      <Link className='Link' to="/categorias">Categorias</Link>
      <Link className='Link' to="/marcas">Marcas</Link>
      <Link className='Link' to="/carrito">Carrito</Link>
      <Link className='Link' to="/contact">Contact</Link>
      <Link className='Link' to="/login">Login</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header className='container-nav'>
          <section className='logo-name'>
            <h1 className='title'>Shoes Shop</h1>
          </section>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/nuevos" element={<Nuevos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
