import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from '../CookieBanner';
import BookingWidget from '../booking/BookingWidget';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [widgetMounted, setWidgetMounted] = useState(isHome);

  useEffect(() => {
    if (isHome) {
      setWidgetMounted(true);
    }
  }, [isHome]);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#F6F7EA]">
      <Navbar />
      <main className="relative flex-grow py-8">
        {/* Background color only for page content */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#F6F7EA] pointer-events-none"
        ></div>
        {widgetMounted && (
          <div
            className={`container mx-auto px-4 mt-6 mb-12 sm:mt-8 md:mt-10 ${
              isHome ? '' : 'hidden'
            }`}
          >
            <BookingWidget />
          </div>
        )}
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
