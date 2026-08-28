import React from "react";
import './client.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import amazon from '../assets/Amazon_Logo.png';
import flipkart from '../assets/fk1.png';
import shopify from '../assets/Shopify_Black_logo.png';
import HR1 from '../assets/HROne_Logo.jpg'; 
import amazonship from '../assets/as.png';
import bonton from '../assets/bonton.png';
import ekart from '../assets/ekart.png';
import redbus from '../assets/redbus.png';
import emudhra from '../assets/emudhra.png'
import mmtrip from '../assets/mmtrip.png';
import petpooja from '../assets/petpooja.png';
import zoho from '../assets/Zoho_Logo.png';
import shipway from '../assets/Shipway_Logo.png';
import razorpay from '../assets/Razorpay_Logo.png';
import Gbox from '../assets/Gallabox_Logo.png';  
import vyapar from '../assets/Vyapar_Logo.png';
import marg from '../assets/marg_books.png' 
import meesho from '../assets/meesho.png';
import bluedart from '../assets/bluedart.png';
import xpress from '../assets/xpressbees.png'
import delhivery from '../assets/delhivery.png'

const partnerdata = [
    {
           img: amazon,
       },
       {
           img: flipkart,
       },
       {
           img: meesho,
       },
       {
           img: shopify,
       },
       {
           img: amazonship,
       },
        {
           img: bluedart,
       },
        {
           img: delhivery,
       },
       {
           img: ekart,
       },
       {
           img: xpress,
       },
       {
           img: shipway,
       },
       {
           img: bonton,
       },
       {
           img: mmtrip,
       },
       {
           img: redbus,
       },
       {
           img: emudhra,
        },
       {
           img: razorpay,
       },
       {
           img: Gbox,
       },
       {
           img: HR1,
       },
       {
           img: marg,
       },
       {
           img: petpooja,
       },
       {
           img: vyapar,
       },
       {
           img: zoho,
       },
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: -1,
    cssEase: "linear",
    pauseOnHover: true, 
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: false,
          autoplaySpeed: 1000,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <div className="  py-5 px-0 client_cc p-3">
      <Slider {...settings}>
        {partnerdata.map((partner, index) => (
          <div key={index} className="p-md-3 px-2">
          <div className=" clint shadow border rounded d-flex justify-content-center align-items-center p-md-4 p-3" style={{ height: "120px" }}>
            <img src={partner.img}  className="w-auto  h-100 img-fluid part" />
            {partner.upcomming && <div className='sticker'>&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; Upcoming &nbsp; &nbsp; &nbsp;</div>}
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
