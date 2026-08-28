import React from 'react';
import { useEffect } from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wow.js';
import image1 from "../assets/abt3.jpg"
import "./about.css"

const About = () => {
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

    return (
        <>
            <div className='py-3 py-md-5 aboutus'>
                <p className='text-white text-center fs-6 '>HOME <span className='fs-5'>&gt;</span> ABOUT</p>
                <h1 className='title text-white text-center pb-2'>ABOUT</h1>
            </div>
            <section className="container about_section text-justify">
                <div className="row text-md-start text-center  align-items-center">
                    {/* Left Column - Heading */}
                    <div className="col-md-12 col-lg-6 py-lg-5 py-md-5 py-2 px-4 p-0 p-md-4 px-md-0 wow animate_animated animate__slideInLeft">

                        <div className='abtra ps-md-3 ps-0 '>
                            <h2 className=" fw-bolder pt-5 pt-md-0">
                                ABOUT <span className=" blu">TRAGARD </span>
                            </h2>
                            <h5 className='my-4 my-md-2'>Your Growth Partner in Business & E-commerce </h5>
                        </div>
                        <div className="about-content pt-2">
                            <p className="mb-3 fw-normal">
                                TRAGARD PRIVATE LIMITED, founded in 2022 by <span className='text-blue'>Yogeswaran S, </span> 
                                is a Coimbatore-based Indian conglomerate specializing in Food & Beverages, 
                                E-commerce, Technology, and Business Solutions. Driven by a mission to empower startups,
                                 creators, and communities, <span ><a className='text-blue' href="/">TRAGARD</a></span> transforms ambitious 
                                 ideas into scalable ventures, from cloud kitchens and hyperlocal e-commerce to digital consulting
                                 and software solutions.

                            </p>

                            <p className=" text-muted fw-normal mb-2">
                                What started as a vision to create meaningful, scalable brands has evolved into a platform that empowers startups, creators, and communities to thrive in India's fast-evolving business landscape.
                            </p>

                            <p className=" text-muted fw-normal mb-2">
                            From launching innovative cloud kitchen brands and running hyperlocal e-commerce operations, to delivering digital transformation through consulting and software solutions, TRAGARD is where ideas become reality.
                            </p>


                        </div>
                    </div>

                    {/* Right Column - Corrected Classes */}
                    <div className="col-md-6 d-md-none  d-lg-block wow animate__slideInDown">
                        <div className="about-content">
                            <img className='w-100 m-auto d-flex about_img' src={image1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='abtsec2 py-0 py-lg-5 py-3 text-white'>
                <div className="container wow animate__fadeInRight">
                    <div className="row text-center mt-5 ">
                        <h2 className='fw-bold'> EMPOWERING GROWTH AND SIMPLIFYING  <span className="zoom text-white D-BLOCK">SUCCESS</span></h2>
                    </div>
                    <div className="row text-center py-1 ">
                        <p className='' >We also provide all services related to e-commerce, digital marketing, etc., to boost your brand's online presence.</p>
                    </div>
                </div>
                {/* Corrected Animation Classes */}
                <div className="container  text-justify wow animate__fadeInDown pb-0 pb-md-3 ">
                    <div className="row pt-4">
                        <div className=" px-4 px-md-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Vision</h5></div>
                            <div className="row">
                                <ul className='abt_ul ps-5 ps-md-5'>
                                    <li>To be a leading, innovative conglomerate that empowers businesses across India and globally by providing comprehensive e-commerce solutions</li>
                                    <li>impactful cloud kitchen services,</li>
                                    <li> cutting-edge technologies, creating value for customers, partners, and society at large.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" px-4 px-md-4 ps-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Mision</h5></div>
                            <div className="row">
                                <ul className='abt_ul ps-5 ps-md-5'>
                                    <li>At TRAGARD, our mission is to offer exceptional business solutions that drive growth and success.</li>
                                    <li>We provide expert e-commerce account management, seamless cloud kitchen services, and reliable software solutions, all while fostering innovation, trust, and sustainable progress for our clients and stakeholders.</li>
                                    <li>We aim to be a catalyst for businesses of all sizes to reach their full potential and contribute to a thriving digital economy.</li>
                                    <li>To create a learning ecosystem with workshops, training programs, and internship opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="px-4 px-md-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our core Values</h5></div>
                            <div className="row">
                                <ul className='abt_ul ps-5 ps-md-5'>
                                    <li>We create meaningful innovations addressing real-world challenges.</li>
                                    <li>We deliver ideas with precision, speed, and efficiency.</li>
                                    <li>We ensure solutions are accessible and affordable for all.</li>
                                    <li>We empower communities to collaborate and grow together.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-4 px-md-4 col-lg-6">
                            <div className="row"><h5 className='success_about'>Our Expertise</h5></div>
                            <div className="row">
                                <ul className='abt_ul ps-5 ps-md-5'>
                                    <li>With a team of experienced professionals and strategic partnerships with industry leaders,</li>
                                    <li>we offer a holistic approach to business success. From startup mentoring to software integration,</li>
                                    <li>our goal is to make your business operations smoother, smarter, and more profitable.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    );
};

export default About;