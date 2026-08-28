import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import smlogo from "../assets/bluicon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import 'animate.css';
import WOW from 'wow.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <>
      {/* Sticky navbar with fade effect */}
      <nav 
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm  ${isSticky ? 'sticky' : ''}`} 
        
      >
        <div className="container-fluid px-md-5 d-flex scnav">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img 
              src={logo} 
              alt="Logo" 
              className="d-none traglogo d-lg-block img-fluid" 
              style={{ width: "200px" }}
            />
            <img 
              src={smlogo} 
              alt="Mobile Logo" 
              className="d-lg-none img-fluid" 
              style={{ width: "40px" }}
            />
          </Link>

          {/* Menu Button for Mobile */}
          <button className="btn d-lg-none" onClick={toggleMenu}>
            <FaBars size={27} />
          </button>

          {/* Desktop Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">Career</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/bussiness" className="nav-link">Business Enquiry</Link>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
          <h5 className="mb-0">Menu</h5>
          <FaTimes size={20} onClick={toggleMenu} style={{ cursor: "pointer" }} />
        </div>
        <ul className="nav flex-column gap-3 p-4 animate__animated animate__fadeInUp wow animate__delay-1s">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
          </li>
          <li className="nav-item">
                <Link to="/career" className="nav-link">Career</Link>
              </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/bussiness" className="nav-link" onClick={toggleMenu}>Business Enquiry</Link>
          </li>
         
        </ul>
      </div>

      {/* Overlay to Close Menu */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
