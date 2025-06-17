import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Local Exp", path: "/local-exp" },
  ];

  return (
<nav className="bg-transparent text-gray-800 py-4 shadow-md border-b border-gray-200">
        <div className="w-full px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logos/mainlogo.png" alt="Fly and Room Logo" className="h-12 md:h-14 mr-2" />
          <span className="text-2xl md:text-3xl font-bold">
        <span className="text-primary">Fly</span> and <span className="text-secondary">room.</span>
        </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
                className={({ isActive }) =>
                  `py-2 px-3 rounded-lg transition-colors hover:bg-primary hover:text-white text-gray-800 ${
                    isActive ? 'bg-primary text-white font-bold' : ''
                  }`
                }
              >
              {item.name}
            </NavLink>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
 <div className="md:hidden bg-navbg border-t border-gray-700 absolute top-16 left-0 right-0 z-50 py-4 px-4 shadow-lg">
      {navItems.map((item) => (
  <NavLink 
    key={item.name}
    to={item.path}
    className={({ isActive }) => 
      `py-2 px-3 rounded-lg transition-colors hover:bg-primary ${
        isActive ? 'bg-primary font-bold text-white' : 'text-gray-300 hover:text-white'
      }`
    }
  >
    {item.name}
  </NavLink>
))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
