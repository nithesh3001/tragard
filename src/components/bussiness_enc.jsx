import React, { useState, useEffect } from "react";
import '../App.css';
import img1 from "../assets/b_img.png";
import 'animate.css';
import WOW from 'wow.js';

const Business = () => {
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

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    email: "",
    industryType: "",
    service: "",
    contactNumber: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // ✅ For Popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("https://tragard-backend.onrender.com/sendbusiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setPopupMessage("Form submitted successfully ✅");
        setFormData({
          firstName: "",
          companyName: "",
          email: "",
          industryType: "",
          service: "",
          contactNumber: "",
          address: "",
          message: "",
        });
      } else {
        setPopupMessage("error ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bform p-5">
      <h2 className="fw-bolder text-black bhead animate__animated animate__fadeInDown wow text-center py-3">
          COMPLETE THE FORM TO HELP US TAILOR A CUSTOM QUOTE FOR YOU
        </h2>
      <div className="row">
        <h2 className="fw-bolder d-lg-none d-block text-center">
          BOOK YOUR <span className="zoom">SLOT!</span>
        </h2>

        <div className="col-lg-6">
          <img
            className="w-100 p-5 mt-4 d-none d-lg-block animate__animated animate__fadeInLeft"
            src={img1}
            alt="Business Illustration"
          />
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Full Name <span className="text-danger">&#42;</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label pt-md-0 pt-3">
                  Company Name <span className="text-danger">&#42;</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Business Email <span className="text-danger">&#42;</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label pt-md-0 pt-3">
                  Contact Number <span className="text-danger">&#42;</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  className="form-control"
                  required
                  pattern="[0-9+ ]{10,15}"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Location (City, State)<span className="text-danger">&#42;</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Select Service <span className="text-danger">&#42;</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  className="form-select"
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled selected hidden>Select</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="Brand Incubation & Launch">Brand Incubation & Launch</option>
                  <option value="Ecommerce Solution">E-commerce Solution</option>
                  <option value="Software & ERP">ERP & Software solution  </option>
                  <option value="Workshop & Training">Workshop & Training</option>
                  <option value="Others">Other</option>
                </select>
              </div>
              
              <div className="col-md-6">
                <label className="form-label pt-md-0 pt-3">
                  Industry Type <span className="text-danger">&#42;</span>
                </label>
                <select
                  name="industryType"
                  value={formData.industryType}
                  className="form-select"
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled selected hidden>Select</option>
                  <option value="F&B">F&B</option>
                  <option value="Retail">Retail</option>
                  <option value="D2C">D2C</option>
                  <option value="Tech">Tech</option>
                  <option value="Services">Services</option>
                  <option value="Others">Other</option>
                </select>
              </div>
            </div>


            <div className="mb-3">
              <label className="form-label">
                Brief Requirement Description <span className="text-danger">&#42;</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                rows="2"
                className="form-control formarea"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div class=" d-flex mt-2">
    <div><input className='me-2 align-content-start' type="checkbox" id="agree" name="agree" required /></div>
       <p> I agree to the <a className='text-primary' href="/policy" target="_blank"> Privacy Policy </a> and  
       <a className='text-primary' href="/terms" target="_blank">  Terms and Conditions</a>.</p>
</div>

            <div className="d-grid">
              <button onSubmit={handleSubmit} type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                {loading ? 'Submitting...' : ' Request Consultation '}
              </button>
            </div>
            {
              popupMessage && (
                <div className="popup-message mt-3">
                  {popupMessage}
                </div>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Business;
