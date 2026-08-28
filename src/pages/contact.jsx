import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./contact.css";
import "../index.css";
import { BsTwitterX } from "react-icons/bs";
import Map from "../components/Map";
const Contact = () => {
  const [popupMessage, setPopupMessage] = useState(""); // ✅ For Popup
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    Dropdown: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setPopupMessage("Contact submitted successfully ✅");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          subject: "",
          Dropdown: "",
          message: "",
        });
      } else {
        setPopupMessage("Server error ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(" Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setPopupMessage("");
      }, 2000);
    }
  };

  return (
    <>
      <div className="py-3 py-md-5 contactus">
        <p className="text-white text-center  fs-6">
          HOME <span className="fs-5">&gt;</span> CONTACT US
        </p>
        <h1 className="title text-white text-center pb-2">CONTACT US</h1>
      </div>

      <section className="contact-container mx-0 mx-lg-5  row p-md-5">
        <div className="contact-info-section shadow text-center text-md-start col-lg-4   px-4 py-5">
          <h1>Launch & Grow Your Business 10X Faster</h1>
          <p className="subtitle">
            Let's discuss potential opportunities for your Business! Apply Now!
          </p>

          <div className="expertise-support">
            <h3>Expertise Support:</h3>
            <div className="contact-details">
              <p>
                <strong>Phone:</strong>
                <a className="text-white fw-bold" href="tel:7550332202">
                  &nbsp; +91 7550332202
                </a>
              </p>
              <p>
                <strong>Email:</strong>&nbsp; &nbsp;{" "}
                <a
                  className="text-white fw-bold"
                  href="mailto:support@tragard.com"
                >
                  support@tragard.com
                </a>{" "}
              </p>
              <div className="social-links">
                <span>
                  <strong>Social Links:</strong>
                </span>
                <div className="social-icons  d-flex gap-2   py-3 ms-md-0  ">
                  <a
                    target="blank"
                    href="https://www.facebook.com/tragardcompanies"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/tragardcompanies/"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    target="blank"
                    href="https://x.com/tragardgroup"
                    aria-label="Twitter"
                  >
                    <BsTwitterX />
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/company/tragard/"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section shadow col-lg-8  px-4 py-5 ">
          <h2 className="fw-bolder">GET IN TOUCH</h2>
          <p className="form-subtitle">
            Fill This form, Our Expertise will reach you soon!
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="eg: 9876543210"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullName">How did you here about us?</label>
                <select
                  required
                  id="Dropdown"
                  value={formData.Dropdown}
                  onChange={handleChange}
                  name="Dropdown"
                  className="form-select"
                >
                  <option value="" disabled>
                    select
                  </option>
                  <option value="Google">Google</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referral">Referral</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div class=" d-flex ">
              <div>
                <input
                  className="me-2 align-content-start"
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                />
              </div>
              <p>
                {" "}
                I agree to the{" "}
                <a className="text-primary" href="/policy" target="_blank">
                  {" "}
                  Privacy Policy{" "}
                </a>{" "}
                and
                <a className="text-primary" href="/terms" target="_blank">
                  {" "}
                  Terms and Conditions
                </a>
                .
              </p>
            </div>
            <button type="submit" className="submit-btn mx-auto ">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {popupMessage && <div className="popup-message">{popupMessage}</div>}
        </div>
      </section>
      <section className="ofz-loc container-fluid mt-lg-5">
        <div className="container">
          <div className="row gap-md-4 gap-lg-0 gap-3">
            <div className="col-lg-3 col-md-12 col-12 d-flex align-items-center">
              <h1>Visit Our Offices Around The India</h1>
            </div>
            <div className="col-1 d-flex align-items-center d-none d-lg-block">
              <div className="line-c"></div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 address">
              <div className="row gap-lg-5 gap-md-5 gap-5 ps-3">
                <div className="col-lg-5 col-md-5 col-12">
                  <h5>Registered Office</h5>
                  <p>
                    25A,
                    <br /> Railway Feeder Road,
                    <br />
                    Rameswaram, Tamil Nadu - 623 526.
                    <br />
                    <span className="num">Mobile :</span> 7550332202
                  </p>
                </div>
                <div className="col-lg-5 col-md-5 col-12">
                  <h5>Corporate Office - South</h5>
                  <p>
                    18, Pricol colony, <br />
                    Kavundampalayam,
                    <br />
                    Coimbatore, Tamil Nadu - 641 030.
                    <br />
                    <span className="num">Mobile :</span> 7550332202
                  </p>
                </div>
                <div className="col-lg-5 col-md-5 col-12">
                  <h5>Corporate Office - North</h5>
                  <p>
                    3rd Floor, Tower - A, Unitech Cyber Park,
                    <br />
                    Village Jharsa, Sector-39,
                    <br />
                    Gurugram, Haryana - 122 003.
                    <br />
                    <span className="num">Mobile :</span> 7550332202
                    <br />
                    <span className="num">Telephone:</span> 0124 656 2421
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mappp py-4  px-lg-5 mx-0 mx-md-5">
        <div className=" p-md-0 p-2  shadow-md">
          <h1 className="text-md-start text-center py-4  fs-bolder  d-block">
            Our <span className="zoom">Location</span>
          </h1>
          <Map />
        </div>
      </section>
    </>
  );
};

export default Contact;
