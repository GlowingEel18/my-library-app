// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './BookItem.css';
import './Genre.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/search" element={<Search />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
