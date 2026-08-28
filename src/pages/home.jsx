import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import c1 from '../assets/1.png'
import c2 from '../assets/2.png'
import c3 from '../assets/3.png'
import c4 from '../assets/4.png'
import LogoCarousel from '../components/client_crsl'
import 'animate.css';
import WOW from 'wow.js';
import Slide from '../components/h_slide'



 const Home = () => {

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

  const cards = [
    {
      img: c1,
      title: 'INNOVATIVE',
      content: 'Our dynamic professionals always stay motivated to help clients with the best strategies and innovative and unique ideas to ace business growth.'
    },
    {
      img: c2,
      title: "CREATIVE",
      content: "We work on the policy to INNOVATE. Our team is constantly working on creating new strategies to help clients' businesses grow and stand out."
    },
    {
      img: c3,
      title: "PRODUCTIVE",
      content: "We have a big team of qualified and skilled professionals whose expertise and knowledge will bring prominent and positive results to your business."
    },
    {
      img: c4,
      title: "RESPONSIVE",
      content: "Our team is dedicatedly working to resolving issues and queries. We work on the policy to get a solution to our client's problems within 2 working days."
    }
  ]
  return (
    <>
    <section className='m-0'>
      <Slide />
    </section>
    <section className='why text-black'>
      <div className='container p-0'>
        <div className="animate__animated animate__fadeInDown wow text-center  px-md-5 p-4">
          <p className='line m-auto d-block my-2'></p>
          <h2 className='py-3 title'>WHY<span className='px-2 zoom '>TRAGARD</span> </h2>
          <h6 className='fw-bolder pb-3'>BUILDING FUTURE-FOCUSED BRANDS THAT MATTER</h6>
          <p className=''> From cloud kitchens to e-commerce and enterprise solutions, TRAGARD empowers bold ideas to scale and succeed.</p>
          <p className='fst-italic fw-bold'>“ We have solutions for all your business requirements”</p>
          <div className="home_button  d-flex gap-4 justify-content-center pt-3">
          <Link to="/brands"><button className='btn btn-lg btn-primary'>Explore Our Brands</button></Link>
          <Link to="/partners"><button className='btn btn-lg  btn-primary'>Partner With Us</button></Link>
          </div>
        </div>
      </div>

      <div className='mx-md-4 px-md-4'>
        <div className="row ">
          {cards.map((card, index) => (
            <div className="col-lg-3 col-md-6 ">
              <div key={index} className="text-center p-md-4 px-md-0 px-4">
                <h1 className=' mx-auto w-75 animate__animated animate__fadeInBottomLeft wow'><img className='cimg img-fluid ' src={card.img} alt="" /></h1>
                <div className=' animate__animated animate__fadeInUp wow'>
                  <h5 className='fw-bold text-orange py-md-2'>{card.title}</h5>
                  <p className='text-justify ctext px-3'>{card.content}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
      <section className='bg-black py-0 py-md-3 text-white'>
        <div className='text-center p-md-5  py-5 p-4'>
          <p className='line m-auto d-block my-2'></p>
          <h2 className='py-3 title  animate__animated animate__fadeInDown wow'>OUR LEVEL OF<span className='zoom px-2'>BRILLIANCE</span> </h2>
          <div className='px-md-5 '>
            <p className='px-md-5 fs-6 p-4 animate__animated animate__fadeInDown wow'>Professional & Outstanding ideas of
               our passionate team makes us unique in every sense.
               Our services are delivered by our team with years of experience are passionate about 
               developing business.</p>
          </div>
          <div className="row py-lg-4 py-md-2 py-4 gap-4 gap-md-0 ">
            <div className="col-lg-3 pb-lg-0 pb-md-3 pb-0 col-md-6 text-warning"><h5 className='resp-text'>BUSINESS CONSULTING</h5></div>
            <div className="col-lg-3 pb-lg-0 pb-md-3 pb-0 col-md-6 text-primary"><h5 className='resp-text'>SOFTWARE SOLUTIONS</h5></div>
            <div className="col-lg-3 col-md-6  mt-0 text-info"><h5 className='resp-text '>E-COMMERCE SOLUTIONS</h5></div>
            <div className="col-lg-3 col-md-6  mt-0 text-danger"><h5 className='resp-text'>WORKSHOP & TRAINING</h5></div>
          </div>
        </div>
      </section>
      <section className=' testimoni  my-5  my-sm-5'>
      <h2 className='py-2 title text-center  animate_ animated  animate__slideInDown wow'>OUR <span className='zoom px-2'>PARTNERS</span> </h2>
       <h6 className='text-center animate_ animated  animate__slideInDown wow fw-bold'>"STRONGER TOGETHER"</h6>
       <div className='animate__animated animate__fadeInUp wow'>
       <LogoCarousel/>
       </div>
      </section>
    </>
  )
}
export default Home
