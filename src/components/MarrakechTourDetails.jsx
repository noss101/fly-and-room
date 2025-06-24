import React, { useState } from 'react';

const images = [
  { src: '/images/Jemaa el-Fnaa.jpg', alt: 'Jemaa el-Fnaa', desc: 'Jemaa el-Fnaa: The heart of Marrakech, known for its street performers, food stalls, and local crafts.' },
  { src: '/images/Koutoubia Mosque.jpg', alt: 'Koutoubia Mosque', desc: "Koutoubia Mosque: The city's iconic landmark with a beautiful minaret visible from many parts of Marrakech." },
  { src: '/images/Bahia Palace.jpg', alt: 'Bahia Palace', desc: 'Bahia Palace: A stunning 19th-century palace showcasing traditional Moroccan architecture and gardens.' },
  { src: '/images/Majorelle Garden.jpg', alt: 'Majorelle Garden', desc: 'Majorelle Garden: A peaceful botanical garden filled with exotic plants and vibrant colors.' },
  { src: '/images/Souks of Marrakech.jpg', alt: 'Souks of Marrakech', desc: 'Souks of Marrakech: Explore narrow alleys lined with shops selling spices, leather goods, textiles, and more.' },
];

const MarrakechTourDetails = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Marrakech Tour and Places for Tourists</h2>
      <p className="mb-3">
        Discover the charm of Marrakech, where tradition meets modern life. This vibrant city offers an unforgettable experience for tourists, with its lively streets, colorful souks, and historic landmarks.
      </p>

      <h3 className="text-xl font-semibold mb-2">Top Places to Visit</h3>
      <ul className="list-disc list-inside mb-3 space-y-4">
        {images.map((img, idx) => (
          <li key={idx} className="flex items-start flex-col">
            <span>{img.desc}</span>
            <div className="mt-2">
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg w-40 cursor-pointer"
                onClick={() => setOpenImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Why Choose Marrakech</h3>
      <p className="mb-3">
        Marrakech offers a mix of culture, history, and warm hospitality. Whether you're wandering through ancient palaces or enjoying a mint tea in a traditional café, the city promises a unique experience that blends the past with the present.
      </p>

      {openImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="Preview"
            className="max-h-full max-w-full rounded"
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};

export default MarrakechTourDetails;
