import React, { useEffect } from 'react'
import 'animate.css';
import WOW from 'wow.js';

import Policy from '../assets/policy.png'
import './terms.css'
const terms = () => {
    
    useEffect(() => {
        // Ensure WOW runs on the client side
        if (typeof window !== 'undefined') {
          const wow = new WOW({
            boxClass: 'wow', // default class name for wow elements
            animateClass: 'animate__animated', // default animate.css class
            offset: 0, // distance to start the animation
            mobile: true, // trigger animations on mobile
            live: true, // check for new elements on the page
          });
          wow.init();
        }
      }, []);
    return (
        <><div className="banner text-center text-white py-3 py-md-5 ">
            <h1 className='title text-white fs-md-1 fs-4 text-center pb-2'>Terms and Conditions</h1>
            <h5 className='fw-bold  fs-md-5 fs-6'>Your Guide to Using Our Services</h5>
        </div>
        <div className='text-center px-3 pt-4'>
            <p className='fw-bold  fs-6 text-muted'> By accessing or using any part of TRAGARD's websites, forms, or services, you agree to the following terms 
            and conditions. </p>
        </div>
            <div  >
                <ul className="conten row text-md-start  m-md-5 m-3">

                    <div className="col-lg-1 col-md-2"><img className='term_img animate__animated animate__fadeInLeft wow' src={Policy} alt="" /></div>
                    <li className='col-lg-11 col-md-10 animate__animated animate__fadeInUp wow '><span className='titl'>Use of Website and Services </span><br />You agree to use our website and services lawfully and in good faith. Misuse, unauthorized access, or scraping
                        of data is prohibited.</li>

                    <div className="col-lg-1 col-md-2"><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/8685/8685158.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_incoming" alt="" /></div>
                    <li  className='col-lg-11 col-md-10 animate__animated animate__fadeInUp wow'><span className='titl'>Intellectual Property </span><br />All content on this site - including text, images, logos, and brand names - is the intellectual property of
                        TRAGARD PRIVATE LIMITED and its ventures. You may not reproduce, modify, or distribute
                         it without written
                        permission. </li>

                        <div className="col-lg-1 col-md-2"><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/2922/2922510.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_incoming" alt="" /></div>
                    <li  className="col-lg-11 col-md-10 animate__animated animate__fadeInUp wow "><span className='titl'>User Submissions </span><br />Any data submitted (e.g., contact forms, resumes, business proposals) becomes part of our internal systems.
                        We reserve the right to evaluate, reject, or respond at our discretion. </li> 

                        <div className="col-lg-1 col-md-2"><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/14993/14993339.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_incoming" alt="" /></div>
                    <li  className="col-lg-11 col-md-10 animate__animated animate__fadeInUp wow"><span className='titl'> Third-Party Links </span><br />Our site may contain links to third-party websites. We are not responsible for their content, terms, or privacy
                        practices. </li>

                        <div className="col-lg-1 col-md-2"><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/10891/10891734.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_hybrid" alt="" /></div>
                    <li  className="col-lg-11 col-md-10 animate__animated animate__fadeInUp wow"><span className='titl'>  Limitation of Liability 
                        </span><br />TRAGARD is not liable for any direct, indirect, or consequential damages arising from your use of our website 
                        or services.</li>

                        <div className="col-lg-1 col-md-2"><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/6135/6135099.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_incoming" alt="" /></div>
                    <li  className="col-lg-11 col-md-10 animate__animated animate__fadeInUp wow"><span className='titl'>Termination </span><br />We reserve the right to restrict or terminate access to our services at any time without prior notice.</li>
                   
                    <div className="col-lg-1 col-md-2 "><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/4252/4252296.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_incoming" alt="" /></div>
                    <li  className="col-lg-11 col-md-10 animate__animated animate__fadeInUp wow" ><span className='titl'>Governing Law </span><br />These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in
                        Coimbatore, Tamil Nadu. </li>
                    
                        <div className="col-lg-1 col-md-2 "><img className='term_img animate__animated animate__fadeInLeft wow' src="https://cdn-icons-png.freepik.com/256/5818/5818695.png?uid=R119292752&ga=GA1.1.1869460351.1733576515&semt=ais_incoming" alt="" /></div>
                    <li className='col-lg-11 col-md-10  animate__animated animate__fadeInUp wow'><span className='titl'>Contact </span><br />For questions about these terms, please contact: support@tragard.com </li>
                </ul>
                <h6 className='fw-bold ms-5 ps-5'>Effective Date : <span className='text-danger'>01/07/2025</span> </h6>
            </div>

        </>
    )
}

export default terms