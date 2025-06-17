import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <main className="flex-grow py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;