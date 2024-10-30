// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Search from './pages/Search';
import Contact from './pages/Contact';
import NewNovels from './NewNovels';
import MysteryBooks from './MysteryBooks';
// Import MysteryBooks

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-novels" element={<NewNovels />} />
        <Route path="/mystery" element={<MysteryBooks />} />
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
