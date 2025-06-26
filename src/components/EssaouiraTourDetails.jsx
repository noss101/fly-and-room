import React, { useState } from 'react';

const places = [
  {
    src: '/images/essaouraunesco.jpg',
    alt: 'Medina of Essaouira',
    title: 'Medina of Essaouira (UNESCO World Heritage)',
    desc: 'Stroll through narrow lanes filled with whitewashed buildings and blue shutters.'
  },
  {
    src: '/images/essaouirarampat.jpg',
    alt: 'Essaouira Ramparts',
    title: 'Essaouira Ramparts',
    desc: 'Enjoy panoramic views of the ocean and feel the breeze from the historic city walls.'
  },
  {
    src: '/images/portofessouira.jpg',
    alt: 'Port of Essaouira',
    title: 'Port of Essaouira',
    desc: 'Watch fishermen bring in their catch or enjoy fresh grilled fish at local stands.'
  },
  {
    src: '/images/The-Sidi-Mohamed-Ben-Abdellah-Museum-the-stairs.jpg',
    alt: 'Sidi Mohamed Ben Abdallah Museum',
    title: 'Sidi Mohamed Ben Abdallah Museum',
    desc: 'Learn about the town\u2019s history, culture, and maritime traditions.'
  },
  {
    src: '/images/beaches-of-essaouira.jpg',
    alt: 'Essaouira Beach',
    title: 'Essaouira Beach',
    desc: 'Perfect for kitesurfing, windsurfing, or simply relaxing on the sand.'
  },
  {
    src: '/images/Essaouiraartshop.jpg',
    alt: 'Art galleries and craft shops',
    title: 'Art galleries and craft shops',
    desc: 'Explore the rich artistic scene, from woodwork to painting.'
  }
];

const EssaouiraTourDetails = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Essaouira Tours — Discover the Windy City of Morocco</h2>
      <p className="mb-3">
        Experience the charm of <strong>Essaouira</strong>, a coastal gem known for its laid-back vibe,
        vibrant culture, and beautiful Atlantic views. Whether you’re a history lover, a surfer, or someone
        seeking fresh seafood and artistic streets, Essaouira offers something unforgettable.
      </p>

      <h3 className="text-xl font-semibold mb-2">Top places and activities in Essaouira</h3>
      <ul className="list-disc list-inside mb-3 space-y-4">
        {places.map((item, idx) => (
          <li key={idx} className="flex items-start flex-col">
            <span><strong>{item.title}</strong> — {item.desc}</span>
            <div className="mt-2">
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg w-60 cursor-pointer"
                onClick={() => setOpenImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Why choose an Essaouira tour?</h3>
      <ul className="list-disc list-inside mb-3">
        <li>Guided walks that combine history and local legends</li>
        <li>Surf and kitesurf classes for all levels</li>
        <li>Day trips from Marrakech with comfortable transport</li>
        <li>Opportunities to taste fresh seafood straight from the port</li>
      </ul>

      <p>Essaouira is where tradition meets the ocean breeze — a must-see stop on your Moroccan journey.</p>

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

export default EssaouiraTourDetails;
