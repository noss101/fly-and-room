import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Local Exp', path: '/local-exp' },
    { name: 'Best Hotels', path: '/best-hotels' },
  ];

  return (
    <nav className="bg-white text-gray-800 py-1 shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-2 md:px-4 flex items-center justify-center md:justify-start relative">
        <Link
          to="/"
          onClick={() => {
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/logos/newlogoo.png"
            alt="Fly and Room Logo"
            className="h-12 md:h-16 transform scale-125 origin-left"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 absolute right-4 top-1/2 -translate-y-1/2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={({ isActive }) =>
                `py-2 px-3 text-sm md:text-base rounded-lg transition-colors hover:bg-primary hover:text-white text-gray-800 ${
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
          className="md:hidden text-gray-800 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-14 left-0 right-0 z-50 py-4 px-4 shadow-lg flex flex-col items-center space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={({ isActive }) =>
                `block w-full text-center py-2 px-3 text-sm md:text-base rounded-lg transition-colors hover:bg-primary hover:text-white text-gray-800 ${
                  isActive ? 'bg-primary font-bold text-white' : ''
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
