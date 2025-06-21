import React from 'react';
import BookingWidget from '../components/booking/BookingWidget';
import MoroccoSection from '../components/sections/MoroccoSection';
import PartnersSection from '../components/sections/PartnersSection';

const HomePage = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 mt-6 mb-12 sm:mt-8 md:mt-10">
        <BookingWidget />
      </div>
      <MoroccoSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;