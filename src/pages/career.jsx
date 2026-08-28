import React, { useState, useEffect } from 'react'
import './career.css';
import Cimg from '../assets/career.png';
import { MdOutlineTimer } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { AiOutlineStock } from "react-icons/ai";
import { GiPathDistance } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import 'animate.css';
import WOW from 'wow.js';
import axios from 'axios';

const benefits = [
  { icon: <RiTeamFill style={{ fontSize: '35px', color: '#0d6efd' }} />, title: 'Amazing Team', description: 'Join skilled professionals passionate about teamwork, innovation, and achieving goals.' },
  { icon: <ImOffice style={{ fontSize: '35px', color: '#0d6efd' }} />, title: 'Inspiring Work Environment', description: 'Work in a modern, creative space designed to inspire collaboration daily.' },
  { icon: <MdOutlineTimer style={{ fontSize: '35px', color: '#0d6efd' }} />, title: 'Flexible Working Hours', description: 'Balance work and life with hybrid schedules and adaptable hours.' },
  { icon: <FaAward style={{ fontSize: '35px', color: '#0d6efd' }} />, title: 'Recognition & Rewards', description: 'Celebrate success with bonuses, awards, and exciting career growth opportunities.' },
  { icon: <AiOutlineStock style={{ fontSize: '35px', color: '#0d6efd' }} />, title: 'Learning & Growth', description: 'Advance your career with workshops, certifications, and personalized development programs.' },
  { icon: <GiPathDistance style={{ fontSize: '35px', color: '#0d6efd' }} />, title: 'Career Path Opportunities', description: 'Follow structured career paths to grow into leadership and senior roles.' },
];

const Career = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wow = new WOW({ boxClass: 'wow', animateClass: 'animate__animated', offset: 0, mobile: true, live: true });
      wow.init();
    }
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    type: "",
    location: "",
    linkedin: "",
    portfolio: "",
    message: ""
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => setResume(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (resume) data.append("resume", resume);

    try {
      const res = await axios.post("https://tragardbackend-production.up.railway.app/career", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message || "Application sent!");
      setShowForm(false);
      setFormData({ fullName: "", email: "", phone: "", role: "", type: "", location: "", linkedin: "", portfolio: "", message: "" });
      setResume(null);
    } catch (err) {
      console.error(err);
      alert("Error sending application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="c1">
        <div className="row">
          <div className="col-lg-6 col-md-12 animate__animated animate__backInLeft wow text-white p-md-5">
            <div className="px-md-4 ccbox">
              <p className="join">Build Your Future with </p>
              <h1 className="head  pb-md-2">TRAGARD</h1>
              <p className="desc">Join an inspiring workplace where innovation, collaboration, and growth are at the core of everything we do.</p>
              <button onClick={handleButtonClick} className="btn btn-outline-light my-md-3 my-4 rounded-pill btn-lg">Discover Opportunities</button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={Cimg} className="w-75 animate__animated animate__fadeInRight wow py-md-5 px-md-4 my-4" alt="Career" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="c2">
        <div className="row">
          <div className="col-lg-6 benifits pt-md-3 d-none d-md-block">
            <div className="row px-md-5 px-4 mx-md-5 mt-md-5 pt-5">
              {benefits.map((b, i) => (
                <div className="col-6 text-md-center text-lg-start p-md-3 py-2" key={i}>
                  <div className='animate__animated animate__zoomIn wow'>
                    <div className='pb-3'>{b.icon}</div>
                    <h6 className='fw-bold'>{b.title}</h6>
                    <p className='text-muted'>{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 life px-lg-4 pt-5 mt-5 text-md-start text-center">
            <div className="px-md-5 mx-md-5 mx-3">
              <h3>Your Life At <br /><span className="text-tragard">Tragard</span></h3>
              <p className='animate__animated animate__fadeInUp wow'>Whether you’re a student, creator, developer or business enthusiast — TRAGARD welcomes you to a thriving community.</p>
              <div className='my-4 d-md-flex d-block'>
                <button onClick={handleButtonClick} className="btn btn-primary p-2 mt-3 mt-md-0 ms-lg-3 rounded-pill">Apply For Internship</button>
                <button onClick={handleButtonClick} className="btn btn-primary p-2 mt-3 mt-md-0 ms-lg-3 rounded-pill">Join Our Network</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM MODAL */}
      {showForm && (
        <div className="modal rounded-0 d-block">
          <div className="m-4 m-md-5">
            <div className="modal-content">
              <div className="modal-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className='d-flex justify-content-between'>
                    <h2 className='text-center text-tragard'>JOIN WITH US</h2>
                    <button type="button" className='btn clbtn1 fs-2 fw-bold text-black ' onClick={handleClose}><IoCloseSharp /></button>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Full Name *</label>
                      <input name="fullName" value={formData.fullName} onChange={handleChange} className='form-control' type="text" required />

                      <label>Phone Number *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className='form-control' type="tel" required />

                      <label>Role/Position *</label>
                      <input name="role" value={formData.role} onChange={handleChange} className='form-control' type="text" required />

                      <label>Upload Resume *</label><br />
                      <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required /><br />

                      <label>Why TRAGARD? *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} className='form-control txtarea' rows={3} required />
                    </div>

                    <div className="col-md-6">
                      <label>Email Address *</label>
                      <input name="email" value={formData.email} onChange={handleChange} className='form-control' type="email" required />

                      <label>Applying for *</label>
                      <select name="type" value={formData.type} onChange={handleChange} className='form-select' required>
                        <option value="" disabled>Choose...</option>
                        <option value="Internship">Internship</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Freelance">Freelance</option>
                      </select>

                      <label>Location *</label>
                      <input name="location" value={formData.location} onChange={handleChange} className='form-control' type="text" required />

                      <label>LinkedIn Profile</label>
                      <input name="linkedin" value={formData.linkedin} onChange={handleChange} className='form-control' type="url" />

                      <label>Portfolio/Website</label>
                      <input name="portfolio" value={formData.portfolio} onChange={handleChange} className='form-control' type="url" />
                    </div>
                  </div>

                  <div className="d-flex mt-2">
                    <input type="checkbox" id="agree" required className='me-2' />
                    <p>I agree to the <a href="/policy" target="_blank">Privacy Policy</a> and <a href="/terms" target="_blank">Terms</a>.</p>
                  </div>

                  <button className='btn btn-primary px-4 my-4' type='submit' disabled={loading}>
                    {loading ? "Sending..." : "Apply Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Career;
