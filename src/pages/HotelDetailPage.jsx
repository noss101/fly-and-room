import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bestHotels } from '../data/bestHotels.jsx';

const HotelDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
      {hotel.images && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {hotel.images.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="rounded-lg overflow-hidden shadow focus:outline-none"
              >
                <img
                  src={src}
                  alt={`${hotel.title} ${idx + 1}`}
                  className="w-full h-40 object-cover cursor-pointer"
                />
              </button>
            ))}
          </div>
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              <img src={selectedImage} alt="Selected" className="max-h-full max-w-full" />
            </div>
          )}
        </>
      )}
      {typeof hotel.details === 'string' ? (
        <p className="text-gray-700 mb-8 whitespace-pre-line">{hotel.details}</p>
      ) : (
        <div className="text-gray-700 mb-8">{hotel.details}</div>
      )}
      <Link to="/best-hotels" className="text-primary font-semibold hover:underline">
        &larr; Back to hotels
      </Link>
    </div>
  );
};

export default HotelDetailPage;

