import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <main className="relative flex-grow py-8">
        {/* Background image only for page content */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/images/zellige.jpg')] bg-cover bg-center opacity-5 pointer-events-none"
        ></div>
        <div className="relative">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;