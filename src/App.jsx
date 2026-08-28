// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/header";
import Home from "./pages/home";
import Contact from "./pages/contact"
import Footer from './components/footer'
import Bussiness from "./components/bussiness_enc";
import { Services } from "./pages/services";
import Brand from './pages/brands';
import Partners from './pages/partners';
import Career from './pages/career';
import About from "./pages/about";
import Terms from "./pages/terms";
import Policy from "./pages/policy";
import ScrollRestorationWrapper from './components/scroll';

function App() {
  return (
    <Router>
      <ScrollRestorationWrapper>
      <div className="App page-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brand/>} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/bussiness" element={<Bussiness />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/policy" element={<Policy/>} />
        </Routes>
        <Footer />
      </div>
      </ScrollRestorationWrapper>
    </Router>
  );
}

export default App;
