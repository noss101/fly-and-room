import React from 'react';
import { bestHotels } from '../data/bestHotels.jsx';
import HotelCard from '../components/HotelCard.jsx';

const BestHotelsPage = () => {
  const hotels = bestHotels;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#272724]">
          Best <span className="text-primary">Hotels</span> in Morocco
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our handpicked selection of luxurious and charming hotels across Morocco.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default BestHotelsPage;
