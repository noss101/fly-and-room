import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from '../CookieBanner';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#F6F7EA]">
      <Navbar />
      <main className="relative flex-grow py-8">
        {/* Background color only for page content */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#F6F7EA] pointer-events-none"
        ></div>
        <div className="relative">
          {children}
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
