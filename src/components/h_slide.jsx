import React from 'react'
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import simg1 from "../assets/s1.svg"
import simg2 from "../assets/s2.svg"
import simg3 from "../assets/s3.svg"
import simg4 from "../assets/s4.svg"
import simg5 from "../assets/s5.svg"
import "./slider.css"


function Slide() {

    const CustomPrevArrow = (props) => (
        <button className="custom-arrow custom-prev" onClick={props.onClick}>
          <FaChevronLeft />
        </button>
      );
    
      const CustomNextArrow = (props) => (
        <button className="custom-arrow custom-next" onClick={props.onClick}>
          <FaChevronRight />
        </button>
      );
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />, // Custom left arrow
        nextArrow: <CustomNextArrow /> // Custom right arrow
      };


    return (
      <div className="slider-container m-0">
        <Slider {...settings}>
          <div>
            <img className='w-100' src={simg3} alt="" />
          </div>
          <div>
          <img className='w-100' src={simg4} alt="" />
          </div>
          <div>
          <img className='w-100' src={simg1} alt="" />
          </div>
          <div>
          <img  className='w-100' src={simg2} alt="" />
          </div>
          <div>
          <img className='w-100' src={simg5} alt="" />
          </div>
        </Slider>
      </div>
    );
  }

export default Slide