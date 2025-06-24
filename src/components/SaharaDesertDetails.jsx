import React from 'react';

const SaharaDesertDetails = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-3">Sahara Desert Adventures</h2>
      <p className="mb-3">
        Explore the magic of the Sahara Desert, where endless golden dunes meet the horizon. From thrilling camel rides to peaceful nights under the stars, the Sahara offers an unforgettable adventure for every traveler.
      </p>

      <h3 className="text-xl font-semibold mb-2">Top Experiences</h3>
      <ul className="list-disc list-inside mb-3">
        <li>
          <strong>Camel Trekking:</strong> Journey through the dunes on camelback and experience the desert like a nomad.
        </li>
        <li>
          <strong>Overnight Camps:</strong> Stay in traditional Berber tents and enjoy local music, food, and stargazing.
        </li>
        <li>
          <strong>4x4 Desert Tours:</strong> Explore hidden oases, rock formations, and remote villages on a guided tour.
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
    </div>
  );
};

export default SaharaDesertDetails;
