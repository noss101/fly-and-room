import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/zellige.jpg')] bg-cover bg-center opacity-30 pointer-events-none"
      ></div>
      <Navbar />
      <main className="relative flex-grow py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;