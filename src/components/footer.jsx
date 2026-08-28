import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagram, FaPhone, FaLinkedin, } from "react-icons/fa";
import Logo from '../assets/logo1.png'
import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
    return (
        <>
            <div className='foot  mt-5'>
            <div className="row ps-lg-5 ps-md-0 ps-0 total pt-md-0 pt-0 mx-4 mt-3">
                <div className=" fcontent col-md-6 col-lg-3  p-2 px-md-3 px-2">
                    <div className="logo text-start"><img className='img-fluid  tralogo ' src={Logo} alt="logo" /></div>
                    <p className='text-justify '>TRAGARD is a multi-venture company founded in Coimbatore, 
                        Tamil Nadu, focused on innovation across food, e-commerce, and enterprise solutions.  
                    </p>
                    <p className='text-justify '>  
                            Our mission is to build impactful brands that solve real-world problems, 
                            while staying rooted in values like quality, affordability, and speed.    
                    </p>
                    <p className='text-justify '>  
                    From crafting India's next-gen cloud kitchen experiences to enabling hyperlocal commerce and 
                    digital transformation for businesses — TRAGARD is where vision meets execution.  
                    </p>

                </div>
                <div className=" col-md-6 text-start col-lg-3 pt-lg-0 pt-md-5 pt-0 justify-content-lg-end justify-content-start pt-0 pt-lg-4 d-flex  ps-md-5 p-3">
                    <div>
                        <h5 className='text-orange '>OUR SERVICES</h5>
                    <ul type="none" className='p-0 flink '>
                        <li><Link to="/services" onClick={() => window.reload()} className="flink">Brand Incubation & Launch</Link></li>
                        <li><Link to="/services" onClick={() => window.reload()} className="flink">Business Consulting</Link></li>
                        <li><Link to="/services" onClick={() => window.reload()} className="flink">E-commerce Solution</Link></li>
                        <li><Link to="/services" onClick={() => window.reload()} className="flink">ERP & Software Solution</Link></li>
                        <li><Link to="/services" onClick={() => window.reload()} className="flink">Workshop and Training</Link></li>
                        <li><Link to="/services" onClick={() => window.reload()} className="flink">Internships & Skill Devolopment</Link></li>
                    </ul>
                    </div>
                </div>
                <div className=" col-md-6 text-start col-lg-3 pt-0 pt-lg-4 justify-content-lg-center justify-content-start d-flex  p-3">
                   <div>
                     <h5 className='text-orange'>QUICK LINKS</h5>
                    <ul type="none" className='p-0 flink '>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li> <Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/services" className="nav-link">Services</Link></li>
                        <li><Link to="/career" className="nav-link">Career</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                        <li><Link to="/bussiness" className="nav-link">Business Enquiry</Link></li>
                    </ul>
                   </div>
                </div>
                <div className="  col-md-6 text-start ps-lg-0 ps-md-5 ps-0 col-lg-3 pt-0 pt-lg-4  flink p-3">
                    <h5 className='text-orange '>CONTACT US</h5>
                    <ul className='cus p-0 text-start' type="none">
                        <li><p><FaLocationDot style={{ color: "white", background: "#1268b3", padding: "4px", borderRadius: "40%", marginRight: "10px", fontSize: "25px" }} /></p> <p className='m-0'>18, Pricol Colony, <br /> Kavundampalayam, <br /> Coimbatore, Tamil Nadu - 641 030.</p></li>
                        <li><p><FaPhone style={{ color: "white", background: "#1268b3", padding: "4px", borderRadius: "40%", marginRight: "10px", fontSize: "25px" }} /></p> <p className='m-0'><a href="tel:7550332202">+91 7550332202</a></p></li>
                        <li><p><IoMdMail style={{ color: "white", background: "#1268b3", padding: "4px", borderRadius: "40%", marginRight: "10px", fontSize: "25px" }} /></p> <p className='m-0'><a href="mailto: support@tragard.com"> support@tragard.com</a></p></li>
                        <li></li>
                    </ul>
                    <h5 className='text-orange fw-bold  '>SHARE WITH US</h5>
                    <div className="icons mt-3 ">
                    <a className='ico' target='blank' href="https://www.facebook.com/tragardcompanies"><FaFacebookSquare /></a>
                    <a className='ico' target='blank' href="https://www.instagram.com/tragardcompanies/"><FaInstagram /></a>
                    <a className='ico' target='blank' href="https://x.com/tragardgroup"><FaSquareXTwitter /></a>
                    <a className='ico' target='blank' href="https://www.linkedin.com/company/tragard/"><FaLinkedin /></a>
                        
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-wave">
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                </div>

                <div className='f_bottom d-md-flex text-center   text-white justify-content-between  px-lg-5 px-md-4  py-2'>
                    <p className='copyright fw-bold px-2' >© 2025 TRAGARD PRIVATE LIMITED. All rights reserved.</p>
                    <ul className='d-flex justify-content-center pt-2 pt-md-0 d-block  gap-md-5 gap-3  '>
                        <li><Link to="/policy" className="nav-link pp fw-bold">Privacy Policy</Link></li>
                        <li> <Link to="/terms" className="nav-link pp fw-bold">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}