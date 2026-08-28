
import React, { useEffect } from 'react'
import './policy.css';
import 'animate.css';
import WOW from 'wow.js';

const policySections = [
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/943/943579.png",
        title: "1. Information We Collect",
        items: [
            "Name, Email Address, Phone Number.",
            "Company / Organization Name.",
            "Resume, LinkedIn, and Job Application Details.",
            "IP Address, Browser Type, Device Info.",
            "Feedback, Messages, and Other User Inputs.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/5653/5653049.png",
        title: "2. How We Use Your Information",
        items: [
            "Respond to inquiries, applications, and service requests.",
            "Deliver tailored solutions and communications.",
            "Improve our website, products, and user experience.",
            "Send updates, marketing messages (with consent), or event info.",
            "Comply with legal or regulatory requirements.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/1400/1400078.png",
        title: "3. Data Sharing and Third Parties",
        items: [
            "We do not sell or rent your data.",
            "Share with internal team members or subsidiaries (e.g., Tragard Foods, Tragard Solutions).",
            "Engage with service providers, consultants, or legal advisors as needed.",
            "Provide data to government agencies if required by law.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/1330/1330387.png",
        title: "4. Cookies and Tracking Technologies",
        items: [
            "Use cookies or similar tools to enhance site performance.",
            "Track user behavior and analyze marketing data.",
            "Control cookie preferences via your browser settings.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/10091/10091846.png",
        title: "5. Data Retention",
        items: [
            "Retain data as long as necessary for its purpose.",
            "Comply with legal obligations and industry standards.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/2489/2489363.png",
        title: "6. Security Measures",
        items: [
            "Adopt industry-standard security practices for data protection.",
            "Note that no method of data storage is 100% secure.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/6800/6800023.png",
        title: "7. Your Rights",
        items: [
            "Request access to, modification, or deletion of your personal data.",
            "Contact us at support@tragard.com for any such requests.",
        ],
    },
    {
        imgSrc: "https://cdn-icons-png.freepik.com/256/17379/17379746.png",
        title: "8. Changes to This Policy",
        items: [
            "Update the Privacy Policy periodically.",
            "Post changes with a revised effective date on this page.",
        ],
    },
];


export default function Terms() {
   
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
        <>
            <div className="banner text-center text-white py-3 animate__animated animate__fadeInDown wow  py-md-5">
                <h1 className="title text-white fs-md-1 fs-4 text-center pb-2">Privacy Policy</h1>
                <h5 className="fw-bold fs-md-5 fs-6">Respecting your privacy always.</h5>
            </div>
            <div className="text-center container my-md-5 my-4 fw-bold">
                <p className=" head-cont p-md-0 animate__animated animate__fadeInUp wow  ">
                    At TRAGARD PRIVATE LIMITED ("TRAGARD", "we", "our", or "us"), your privacy is important to us. This Privacy Policy
                    explains how we collect, use, disclose, and protect your personal information when you interact with our website
                    (<span className='text-blue'>www.tragard.com</span>), platforms, services, and affiliated ventures.
                </p>
            </div>
            <div className="policy_cont row container-fluid pt-4 px-md-5 px-2">
                {policySections.map((section, index) => (
                    <div className="col-lg-6 animate__animated animate__fadeIn wow ">
                        <div className="row px-2 box" key={index}>
                        <div className="col-md-2 text-center text-md-start  pb-3 pb-md-0">
                            <img className="policy_img animate__animated animate__fadeInLeft wow  " src={section.imgSrc} alt={section.title} />
                        </div>
                        <div className="col-md-10">
                            <h5 className=' text-start animate__animated animate__fadeInUp wow  pb-1 pb-md-0'>{section.title}</h5>
                            <ul>
                                {section.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    </div>
                ))}
                 <h6 className='fw-bold ms-5 mt-3 ps-5'>Effective Date: <span className='text-danger'>01/07/2025</span>  </h6>
            </div>
        </>
    );
}
