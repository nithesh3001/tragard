import React, { useEffect } from 'react';
import './brands.css';
import Tfood from '../assets/Tfoods.png';
import Tsolution from '../assets/Tsolution.png';
import tsafeserve from '../assets/tsafeserve.png';
import tfound from '../assets/tfoundation.png';
import tenter from '../assets/tenter.png';
import tripist from '../assets/trpistcrop.png';
import tretail from '../assets/tretail.png';
import ttrans from '../assets/ttransport.png';

import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';
import WOW from 'wow.js';

const brandsData = [
  {
    id: 1,
    name: 'Tripist',
    image: tripist,
    description:
      ' Curated travel, tourism, and hospitality experiences built to deliver meaningful, memorable journeys. Designed for travelers who expect more than just a trip.',
    hoverText:
      'Curated travel, tourism, and hospitality experiences built to deliver meaningful, memorable journeys. Designed for travelers who expect more than just a trip.',
      buttonLink:'https://tripist.in/'
  },
  {
    id: 2,
    name: 'TRAGARD FOODS',
    image: Tfood,
    description:
      'Cloud-kitchen concepts and regional fusion cuisine engineered for modern consumer tastes. Focused on quality, speed, and scalable food operations.',
    hoverText:
      'Cloud-kitchen concepts and regional fusion cuisine engineered for modern consumer tastes. Focused on quality, speed, and scalable food operations.',
  },
  {
    id: 3,
    name: ' Tragard SafeServe',
    image: tsafeserve,
    description:
      ' Food safety audits, hygiene systems, and FSSAI compliance solutions for professional kitchens. Built to protect brands and elevate operational standards.',
    hoverText:
      'Food safety audits, hygiene systems, and FSSAI compliance solutions for professional kitchens. Built to protect brands and elevate operational standards.',
  },
   {
    id: 4,
    name: 'Tragard Retail',
    image: tretail,
    description:
      ' Retail-focused brand offering modern, scalable store formats and customer-first shopping experiences.',
    hoverText:
      'Built to deliver accessible, convenient, and high-value retail solutions across categories.',
  },
  {
    id: 5,
    name: 'TRAGARD SOLUTIONS',
    image: Tsolution,
    description:
      'Business consulting, ERP implementation, and eCommerce operations for startups and enterprises.',
    hoverText:
      'Focused on efficiency, automation, and measurable growth.',
  },
{
    id: 6,
    name: ' Tragard Entertainment',
    image: tenter,
    description:
      'Production house offering events, shows, and creative media with a purpose-driven approach.',
    hoverText:
      'Where storytelling meets execution excellence.',
  },
   {
    id: 7,
    name: ' Tragard Transportation',
    image: ttrans,
    description:
      ' Transport, logistics, and warehousing solutions built for speed, accuracy, and operational discipline.',
    hoverText:
      'Designed to move, store, and manage goods seamlessly across local and regional networks.',
  },
  {
    id: 8,
    name: ' Tragard Foundation',
    image: tfound,
    description:
      'A purpose-driven trust supporting community development, education, entrepreneurship, and social welfare.',
    hoverText:
      'Focused on creating long-term impact through responsible initiatives and meaningful outreach.',
  },
  
  
 
 
];

const Brand = () => {
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
      <div className="py-3 py-md-5 brand-bg">
        <p className="text-white text-center fs-6">
          HOME <span className="fs-5">&gt;</span> BRANDS
        </p>
        <h1 className="title text-white text-center pb-2">BRANDS</h1>
      </div>
      <section className=" px-md-5 px-4">
        <div className="text-center animate__animated animate__fadeInDown wow py-4">
          <h2 className="pt-3 pb-2 title fs-bolder">
            OUR<span className="zoom px-2">Brands</span>
          </h2>
          <h6 className="title ">EMPOWERING INNOVATION THROUGH TRUST AND EXCELLENCE.</h6>
          <p className='fw-bold text-muted '> TRAGARD brings together a dynamic group of brands across food, technology, logistics, real estate,
            hospitality, and  digital transformation - built with trust, innovation, and long-term impact.</p>
          <p className="line m-auto d-block my-1"></p>
        </div>
        <div className="row justify-content-center align-items-center  py-5 px-2  px-md-0 px-md-3">
          {brandsData.map((brand) => (
            <div key={brand.id} className="col-md-6 bbox col-lg-3 text-center pb-4">
              <div className=" p-lg-3 py-lg-5 py-5  p-md-5 outer animate__animated animate__zoomIn wow shadow">
                <img className="brandpic mx-auto" src={brand.image} alt={brand.name} />
                <h5>{brand.name}</h5>
                <p className=''>{brand.description}</p>
                <div className="hovcont">
                  <div className="arowlogo">
                    <FaArrowRight />
                  </div>
                  <div className="arow-btn p-3">
                    <p className='htext'>{brand.hoverText}</p>
                    <a href={brand.buttonLink} target='_blank' className="btn btn-light">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Brand;
