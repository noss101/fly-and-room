import React from 'react';
import BookingWidget from '../components/booking/BookingWidget';
import MoroccoSection from '../components/sections/MoroccoSection';

const HomePage = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 my-12">
        <BookingWidget />
      </div>
      <MoroccoSection />
    </div>
  );
};

export default HomePage;