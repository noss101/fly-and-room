import React, { useState } from 'react';

const SaharaDesertDetails = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Sahara Desert Adventures</h2>
      <p className="mb-3">
        Explore the magic of the Sahara Desert, where endless golden dunes meet the horizon. From thrilling camel rides to peaceful nights under the stars, the Sahara offers an unforgettable adventure for every traveler.
      </p>

      <h3 className="text-xl font-semibold mb-2">Top Experiences</h3>
      <ul className="list-disc list-inside mb-3">
        <li className="flex items-start flex-col">
          <div className="flex items-start">
            <img
              src="/images/camelicon.png"
              alt="Camel icon"
              className="w-5 h-5 mr-2 inline"
              loading="lazy"
            />
            <span>
              <strong>Camel Trekking:</strong> Journey through the dunes on camelback and experience the desert like a nomad.
            </span>
          </div>
          <div className="mt-2">
            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg w-40 cursor-pointer"
              onClick={() => setOpenImage('/images/Camel Trekking.jpg')}
            >
              <img
                src="/images/Camel Trekking.jpg"
                alt="Camel Trekking"
                className="h-28 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </li>
        <li className="flex items-start flex-col">
          <div className="flex items-start">
            <img
              src="/icons/capmicon.png"
              alt="Camp icon"
              className="w-5 h-5 mr-2 inline"
              loading="lazy"
            />
            <span>
              <strong>Overnight Camps:</strong> Stay in traditional Berber tents and enjoy local music, food, and stargazing.
            </span>
          </div>
          <div className="mt-2">
            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg w-40 cursor-pointer"
              onClick={() => setOpenImage('/images/Overnight Camps desert.png')}
            >
              <img
                src="/images/Overnight Camps desert.png"
                alt="Overnight Camps"
                className="h-28 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </li>
        <li className="flex items-start flex-col">
          <div className="flex items-start">
            <img
              src="/icons/4.4icon.png"
              alt="4x4 icon"
              className="w-5 h-5 mr-2 inline"
              loading="lazy"
            />
            <span>
              <strong>4x4 Desert Tours:</strong> Explore hidden oases, rock formations, and remote villages on a guided tour.
            </span>
          </div>
          <div className="mt-2">
            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg w-40 cursor-pointer"
              onClick={() => setOpenImage('/images/4.4.png')}
            >
              <img
                src="/images/4.4.png"
                alt="4x4 Desert Tours"
                className="h-28 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </li>
        <li>
          <strong>Sandboarding:</strong> Feel the thrill as you slide down the giant sand dunes.
        </li>
        <li>
          <strong>Sunset Views:</strong> Watch the sun set over the vast desert landscape — a truly breathtaking sight.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Why Visit the Sahara</h3>
      <p className="mb-3">
        The Sahara Desert is more than just sand — it's a place of peace, beauty, and discovery. Whether you seek adventure or relaxation, the desert promises a unique and unforgettable experience.
      </p>

      <a href="/local-experiences/sahara-desert-adventures" className="inline-block mt-2 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
        Learn More
      </a>

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

export default SaharaDesertDetails;
