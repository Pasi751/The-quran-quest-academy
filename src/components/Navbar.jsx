import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import whatsapp from '../images/whatsapp.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Fee Structure', path: '/fee-structure' },
    { name: 'Enrollment', path: '/enrollment' },
  ]

  return (
    <nav className="w-full px-5">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0 ml-2 md:ml-8">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-14 mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-dm font-medium text-black hover:text-[#1F596B] transition duration-200"
            >
              {link.name}
            </Link>
          ))}
          
           <a href="https://wa.me/+923182042652"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm flex items-center gap-2 bg-[#1F596B] hover:bg-[#174a5a] text-white px-4 py-1 rounded-tl-lg rounded-br-lg transition duration-200"
          >
            Call Now
            <img src={whatsapp} alt="whatsapp" className="w-4" />
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-dm font-medium text-black hover:text-[#1F596B] transition duration-200"
            >
              {link.name}
            </Link>
          ))}
          
            <a href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm flex items-center gap-2 bg-[#1F596B] hover:bg-[#174a5a] text-white px-6 py-2 rounded-tl-lg rounded-br-lg transition duration-200"
          >
            Call Now
            <img src={whatsapp} alt="whatsapp" className="w-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar