import React from "react";
import { useLocation, useNavigate,NavLink } from "react-router-dom";
import Phone from '../images/phone-call.png';
import QrCode from '../images/qrcode.jpeg';
import Facebook from '../images/facebook.png';
import Whatsapp from '../images/whatsapp1.png';
import Instagram from '../images/instagram.png';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEnrollmentClick = (e) => {
    e.preventDefault();

    // Navigate to fee structure page and scroll to enrollment section
    if (location.pathname === '/fee-structure') {
      // If already on fee structure page, just scroll to enrollment section
      const enrollmentSection = document.getElementById('enrollment-form');
      if (enrollmentSection) {
        enrollmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to fee structure page first, then scroll
      navigate('/fee-structure');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const enrollmentSection = document.getElementById('enrollment-form');
        if (enrollmentSection) {
          enrollmentSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-white text-white relative overflow-hidden" style={{ backgroundColor: '#174a5a' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-32 py-16">
        {/* Top Section with Logo */}
        <div className="text-center mb-12">
          <h1
            className="font-amstel text-2xl md:text-3xl text-white mb-4"
          >
            The Quran Quest Academy
          </h1>
          <div className="w-full h-0.5 bg-white opacity-30 mx-auto"></div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-14 md:gap-16">
          {/* Left Side - Our Vision */}
          <div className="text-center md:text-left md:max-w-xs">
            <h3
              className="font-dm text-xl md:text-2xl text-white mb-6 font-semibold"

            >
              Our Vision
            </h3>
            <p
              className="font-dm text-white text-lg md:text-xl font-extralight max-w-xl"
            >
              Inspiring a global generation to live by the Quran.
            </p>
          </div>

          {/* Right Side - Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 flex-1 md:max-w-4xl">
            {/* Address */}
            <div className="text-center md:text-left">
              <h3
                className="font-dm text-sm md:text-base text-white mb-6 font-semibold"
              >
                Address
              </h3>
              <div
                className="font-dm text-white  text-xs md:text-sm leading-relaxed font-extralight"
              >
                <p>Quraan Quest Online Academy,</p>
                <p>Defence Phase 1,</p>
                <p>Karachi, Pakistan.</p>
              </div>
            </div>

            {/* Pages */}
            <div className="text-center md:text-left">
              <h3
                className="font-dm text-sm md:text-base text-white mb-6 font-semibold"
              >
                Pages
              </h3>
              <ul
                className="font-dm text-white text-xs md:text-sm leading-relaxed font-extralight space-y-1"
              >
                <li><NavLink to="/" className="hover:opacity-80 transition-opacity">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:opacity-80 transition-opacity">About us</NavLink></li>
                <li><NavLink to="/courses" className="hover:opacity-80 transition-opacity">Courses</NavLink></li>
                <li><NavLink to="/fee-structure" className="hover:opacity-80 transition-opacity">Fee structure</NavLink></li>
                <li><NavLink to="/enrollment" className="hover:opacity-80 transition-opacity">Enrollment</NavLink></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="text-center md:text-left">
              <h3
                className="font-inter text-sm md:text-base text-white mb-6 font-semibold"
              >
                Contact Us
              </h3>

              {/* QR Code */}
              <div className="flex justify-center md:justify-start mb-4">
                <img
                  src={QrCode}
                  alt="QR Code"
                  className="w-24 h-24 bg-white p-1 rounded-lg shadow-lg"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start space-x-2">
                <a href="tel:+923182042652" className="hover:scale-110 transition-transform">
                  <img
                    src={Phone}
                    alt="Phone"
                    className="w-5 h-5"
                  />
                </a>
                <a href="https://wa.me/+923182042652?text=Hello%20there!%20I%27m%20interested%20in%20your%20services." target="_blank" className="hover:scale-110 transition-transform">
                  <img
                    src={Whatsapp}
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                </a>
                <a href="https://www.instagram.com/thequranquest.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:scale-110 transition-transform">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>
                <a href="https://web.facebook.com/thequranquestofficial/" target="_blank" className="hover:scale-110 transition-transform">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-6 md:px-32 py-6">
          <p
            className="font-dm text-center text-xs md:text-sm text-white-900 font-extralight"
          >
            © 2026 The Quran Quest Online Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}