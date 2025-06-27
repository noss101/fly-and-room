import React, { useState } from 'react';

const highlights = [
  {
    src: '/images/fes elbali.jpg',
    alt: 'Fes el-Bali (Old Medina)',
    title: 'Fes el-Bali (Old Medina)',
    desc:
      'A UNESCO World Heritage site with labyrinthine alleys, colorful markets, and centuries-old mosques.'
  },
  {
    src: '/images/alqarawaynfes.jpg',
    alt: 'Al Quaraouiyine University',
    title: 'Al Quaraouiyine University',
    desc:
      'The oldest existing university in the world, founded in 859 AD — a must-visit for culture and history lovers.'
  },
  {
    src: '/images/traditionaltanneris.jpg',
    alt: 'Traditional Tanneries',
    title: 'Traditional Tanneries',
    desc:
      'Witness leather-making using centuries-old techniques in the iconic Chouara Tannery.'
  },
  {
    src: '/images/inanimadrasa.jpeg',
    alt: 'Bou Inania Madrasa',
    title: 'Bou Inania Madrasa',
    desc:
      'A stunning 14th-century Islamic school with intricate zellige tilework and cedarwood carvings.'
  },
  {
    src: '/images/feshandicraft.png',
    alt: 'Handicrafts & Artisanal Souks',
    title: 'Handicrafts & Artisanal Souks',
    desc:
      'Discover handmade pottery, brass lanterns, woven textiles, and more — directly from local artisans.'
  }
];

const FesCulturalDetails = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Fes Cultural Experience</h2>
      <p className="mb-3">
        Step into the spiritual heart of Morocco with a cultural journey through the historic city of Fes. Known for its ancient medina, vibrant souks, and scholarly traditions, Fes offers a rich blend of history, architecture, and authentic Moroccan life.
      </p>

      <h3 className="text-xl font-semibold mb-2">What to Explore:</h3>
      <ul className="list-disc list-inside mb-3 space-y-4">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-start flex-col">
            <span>
              <strong>{item.title}</strong> – {item.desc}
            </span>
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
        <li className="flex items-start flex-col">
          <span>
            <strong>Authentic Moroccan Cuisine</strong> – Taste traditional dishes like Bissara, pastilla, and freshly baked bread in local riads and food stalls.
          </span>
        </li>
      </ul>

      <p>
        Whether you're wandering through the medina or sipping mint tea in a hidden courtyard, Fes immerses you in a timeless cultural experience. It's more than a visit — it's a journey into Morocco’s soul.
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

export default FesCulturalDetails;
