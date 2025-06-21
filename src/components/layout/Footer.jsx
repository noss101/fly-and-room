import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Local Exp", path: "/local-exp" },
  ];

  return (
    <footer className="bg-white text-gray-800 py-4 shadow-md border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center hover:no-underline">
  <img
    src="/logos/newlogoo.png"
    alt="Fly and Room Logo"
    className="h-10 sm:h-12 md:h-14 w-auto mr-3"
  />
  <span className="text-xl font-bold hover:no-underline">
    <span className="text-primary">Fly</span>{' '}
    and{' '}
    <span className="text-secondary">room.</span>
  </span>
</Link>
              <p className="mt-2 text-gray-600 max-w-md text-sm md:text-base">
              Your trusted partner for flights, hotels, and car rentals in Morocco and beyond.
            </p>
          </div>
          
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base">
                {footerLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                      <Link to={link.path} className="text-gray-800 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">Information</h3>
              <ul className="space-y-2 text-sm md:text-base">
                {footerLinks.slice(3).map((link) => (
                  <li key={link.name}>
                      <Link to={link.path} className="text-gray-800 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li>Email: info@flyandroom.com</li>
                <li>Phone: +212 600-123456</li>
                <li>Address: Marrakech, Morocco</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Fly and Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
