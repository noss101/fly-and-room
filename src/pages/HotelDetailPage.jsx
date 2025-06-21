import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { bestHotels } from '../data/bestHotels';

const HotelDetailPage = () => {
  const { slug } = useParams();
  const hotel = bestHotels.find((h) => h.slug === slug);

  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-gray-600">Hotel not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#272724]">
        {hotel.title}
      </h1>
      <p className="text-gray-700 mb-8 whitespace-pre-line">{hotel.details}</p>
      <Link to="/best-hotels" className="text-primary font-semibold hover:underline">
        &larr; Back to hotels
      </Link>
    </div>
  );
};

export default HotelDetailPage;
