// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from "./pages/UploadPage";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Search from './pages/Search';
import Contact from './pages/Contact';
import NewNovels from './pages/NewNovels';
import MysteryBooks from './pages/MysteryBooks';
import FantasyBooks from './pages/FantasyBooks';
import DramaBooks from './pages/DramaBooks';
import FictionBooks from './pages/FictionBooks';
import NonFictionBooks from './pages/NonFictionBooks';
import RomanceBooks from './pages/RomanceBooks';
import ScientificMysteryBooks from './pages/ScientificMysteryBooks';
import SciFiBooks from './pages/SciFiBooks';
import HorrorBooks from './pages/HorrorBooks';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-novels" element={<NewNovels />} />
          <Route path="/mystery" element={<MysteryBooks />} />
          <Route path="/fantasy" element={<FantasyBooks />} />
          <Route path="/drama" element={<DramaBooks />} />
          <Route path="/fiction" element={<FictionBooks />} />
          <Route path="/nonfiction" element={<NonFictionBooks />} />
          <Route path="/romance" element={<RomanceBooks />} />
          <Route path="/scientific-mystery" element={<ScientificMysteryBooks />} />
          <Route path="/sci-fi" element={<SciFiBooks />} />
          <Route path="/horror" element={<HorrorBooks />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
