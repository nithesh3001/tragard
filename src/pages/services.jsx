import React, { useEffect, useState } from "react";
import web from "../assets/LAUNCH.png";
import skill from "../assets/skill.png";
import bc from "../assets/bussiness.png";
import ecom from "../assets/ecom.png";
import soft from "../assets/soft.png";
import train from "../assets/training.png";
import { FaArrowRight } from "react-icons/fa";
import "./service.css";
import "animate.css";
import WOW from "wow.js";

export const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // ✅ For Popup

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    }
  }, []);

  const servicedata = [
    {
      id: "BRAND",
      img: web,
      title: "BRAND INCUBATION & LAUNCH",
      desc: "We turn your ideas into scalable brands — from validation, branding, and MVP development to launch, vendor setup, and growth acceleration.",
    },
    {
      id: "BUSINESS CONSULTING",
      img: bc,
      title: "BUSINESS CONSULTING",
      desc: "We provide strategic guidance to optimize operations, scale businesses, improve efficiency, and maximize profitability through tailored solutions, expert analysis, and innovative growth strategies.",
    },
    {
      id: "E-COMMERCE SOLUTION",
      img: ecom,
      title: "E-COMMERCE SOLUTION",
      desc: "We help businesses succeed on Amazon, Flipkart, and Shopify with account setup, product optimization, advertising, fulfillment, and compliance management.",
    },
    {
      id: "ERP & SOFTWARE SOLUTIONS",
      img: soft,
      title: "ERP & SOFTWARE SOLUTIONS",
      desc: "Our tools streamline operations with inventory management, HR & payroll systems, business analytics, and custom ERP development, enhancing efficiency and decision-making.",
    },
    {
      id: "WORKSHOP & TRAINING",
      img: train,
      title: "WORKSHOP & TRAINING",
      desc: "We offer hands-on training for entrepreneurs, students, and professionals, focusing on business skills, digital marketing, e-commerce strategies, and technological advancements.",
    },
    {
      id: "INTERNSHIPS & SKILL DEVELOPMENT",
      img: skill,
      title: "INTERNSHIPS & SKILL DEVELOPMENT",
      desc: "Our programs provide industry-relevant training, mentorship, real-world projects, and certifications, helping individuals develop essential skills for professional growth and employability.",
    },
  ];

  const handleViewMore = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("➡️ Form Data:", formData);
    console.log("➡️ Selected Service:", selectedService?.title);

    try {
      const response = await fetch(
        "https://tragardbackend-production.up.railway.app:8080/sendservice",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            service: selectedService?.title,
          }),
        },
      );

      console.log("✅ Response status:", response.status);
      console.log("✅ Response headers:", response.headers);

      // Check if response is OK before parsing JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Response data:", data);

      if (data.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setPopupMessage("Form submitted successfully ✅");
      } else {
        setPopupMessage(
          `Error: ${data.error || data.message || "Failed to submit form"}`,
        );
      }
    } catch (err) {
      console.error("🚨 Fetch error:", err);

      // More specific error messages
      if (err.message.includes("Failed to fetch")) {
        setPopupMessage("Network error - Cannot connect to server ❌");
      } else if (err.message.includes("HTTP error")) {
        setPopupMessage(`Server error: ${err.message} ❌`);
      } else {
        setPopupMessage("Unexpected error occurred ❌");
      }
    } finally {
      setIsSubmitting(false);
      setShowForm(false);
      setTimeout(() => setPopupMessage(""), 4000);
    }
  };

  return (
    <>
      <div className="py-3 py-md-5 serv">
        <p className="text-white text-center fs-6">
          HOME <span className="fs-5">&gt;</span> SERVICE
        </p>
        <h1 className="title text-white text-center pb-2">SERVICES</h1>
      </div>

      <div className="text-center container">
        <div className="text-center animate__animated animate__fadeInDown wow">
          <p className="lines m-auto d-block my-2 pt-4"></p>
          <h2 className="py-3 title">
            OUR<span className="zoom px-2 ">SERVICES</span>
          </h2>
          <h6 className="fw-bolder pb-4 px-md-0 px-3">
            EMPOWERING GROWTH, SIMPLIFYING SUCCESS
          </h6>
        </div>

        <div className="row px-md-5 px-2 g-3">
          {servicedata.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="col-lg-4 col-md-6 p-md-3 p-3"
            >
              <div className="p-md-3 p-4 content rounded h-100 shadow">
                <div className="arrow">
                  <div className="arowlogo">
                    <FaArrowRight />
                  </div>
                  <div className="arow-btn p-3">
                    <p>{service.desc}</p>
                    <button
                      onClick={() => handleViewMore(service)}
                      className="border-1 btn btn-light"
                    >
                      View More
                    </button>
                  </div>
                </div>
                <h1 className="p-0 px-md-4 animate__animated animate__fadeInBottomLeft wow">
                  <img
                    className="w-25 img-fluid"
                    src={service.img}
                    alt="service"
                  />
                </h1>
                <h5 className="pb-2 fw-bold animate__animated animate__fadeInUp wow">
                  {service.title}
                </h5>
                <p className="px-3 animate__animated animate__fadeInUp wow sdesc">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="overlay" onClick={handleCloseForm}>
          <div
            className="slide-form-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="slide-form">
              <div className="form-content p-4">
                <button className="btn-close fs-1" onClick={handleCloseForm}>
                  ×
                </button>
                <h4 className="mb-3 text-center blu fw-bold pt-5">
                  {selectedService?.title}
                </h4>
                <form className="px-3 pt-3 pt-md-0" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name<span className="text-danger">&#42;</span>
                    </label>
                    <input
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email<span className="text-danger">&#42;</span>
                    </label>
                    <input
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number<span className="text-danger">&#42;</span>
                    </label>
                    <input
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message<span className="text-danger">&#42;</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-blue mt-3 w-100"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {popupMessage && <div className="popup-message">{popupMessage}</div>}
    </>
  );
};
