import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel, animation = '' }) => {
  return (
    <Link
      to={`/best-hotels/${hotel.slug}`}
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${animation}`}
    >
      <img src={hotel.image} alt={hotel.title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{hotel.title}</h3>
        <p className="text-gray-600 mb-4">{hotel.description}</p>
        <span className="text-primary font-semibold hover:underline">Discover Hotel</span>
      </div>
    </Link>
  );
};

export default HotelCard;
