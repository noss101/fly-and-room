import React, { useState } from 'react';

const highlights = [
  {
    src: '/images/godsbridg.jpg',
    alt: "God's Bridge",
    title: "God's Bridge",
    desc: 'A massive natural rock arch and iconic photo spot.'
  },
  {
    src: '/images/akchour trik.jpg',
    alt: 'Waterfall Trek',
    title: 'Waterfall Trek',
    desc: 'A peaceful hike through forested paths leading to majestic waterfalls.'
  },
  {
    src: '/images/rivercaves.jpg',
    alt: 'River Cafés',
    title: 'River Cafés',
    desc: 'Enjoy mint tea or tagine with your feet dipped in fresh stream water.'
  },
  {
    src: '/images/ecovibes.jpg',
    alt: 'Eco Vibes',
    title: 'Eco Vibes',
    desc: 'Perfect for a digital detox and connecting with nature.'
  }
];

const AkchourNatureEscapeDetails = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Akchour Nature Escape</h2>
      <p className="mb-3">
        Nestled between the mountains near Chefchaouen, <strong>Akchour</strong> is a hidden gem known for its lush trails, crystal-clear rivers, and scenic waterfalls. It’s the perfect day trip for nature lovers, hikers, and explorers.
      </p>
      <ul className="list-disc list-inside mb-3 space-y-4">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-start flex-col">
            <span>
              <strong>{item.title}:</strong> {item.desc}
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
      </ul>
      <p>
        Akchour is more than a destination—it’s an escape into one of Morocco’s most tranquil and enchanting landscapes.
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

export default AkchourNatureEscapeDetails;
