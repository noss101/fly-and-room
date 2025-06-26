import React, { useState } from 'react';

const places = [
  {
    src: '/images/chefchaounemedina.jpeg',
    alt: 'The Medina',
    title: 'The Medina',
    desc:
      'Wander through narrow streets lined with vibrant blue houses, local shops, and friendly cafés.'
  },
  {
    src: '/images/kasbahmusem.jpg',
    alt: 'Kasbah Museum',
    title: 'Kasbah Museum',
    desc:
      'Visit this restored fortress with its gardens, small museum, and lookout tower offering views over the city.'
  },
  {
    src: '/images/rasslmachef.jpg',
    alt: 'Ras El Maa Waterfall',
    title: 'Ras El Maa Waterfall',
    desc:
      'A refreshing spot where locals gather; enjoy the sound of flowing water just a short walk from the medina.'
  },
  {
    src: '/images/spainshmousque.jpg',
    alt: 'Spanish Mosque',
    title: 'Spanish Mosque',
    desc:
      'Hike to this viewpoint at sunset for panoramic views of the blue town and surrounding mountains.'
  },
  {
    src: '/images/Chefchaouen-local-Market.jpg',
    alt: 'Local markets',
    title: 'Local markets',
    desc:
      'Shop for handmade textiles, woven blankets, leather goods, and natural soaps.'
  }
];

const ChefchaouenBlueCityDetails = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow-2xl">
      <h2 className="text-2xl font-bold mb-3">Chefchaouen — Explore Morocco’s Magical Blue City</h2>
      <p className="mb-3">
        Discover <strong>Chefchaouen</strong>, the famous Blue City of Morocco, where every corner feels
        like a work of art. Tucked away in the Rif Mountains, Chefchaouen is known for its blue-washed
        buildings, peaceful atmosphere, and breathtaking mountain views — a dream for photographers and
        explorers alike.
      </p>

      <h3 className="text-xl font-semibold mb-2">Top places and experiences in Chefchaouen</h3>
      <ul className="list-disc list-inside mb-3 space-y-4">
        {places.map((place, idx) => (
          <li key={idx} className="flex items-start flex-col">
            <span>
              <strong>{place.title}</strong> — {place.desc}
            </span>
            <div className="mt-2">
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg w-60 cursor-pointer"
                onClick={() => setOpenImage(place.src)}
              >
                <img src={place.src} alt={place.alt} className="h-40 w-full object-cover" loading="lazy" />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Why visit Chefchaouen?</h3>
      <ul className="list-disc list-inside mb-3">
        <li>Unique blue architecture that creates a magical, calming vibe</li>
        <li>Ideal for hiking and nature lovers with trails nearby</li>
        <li>Warm hospitality and relaxed pace of life</li>
        <li>Great for day trips from Tangier or Tetouan</li>
      </ul>

      <p>Chefchaouen is truly a gem for those seeking beauty, culture, and serenity on their Moroccan adventure.</p>

      {openImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setOpenImage(null)}
        >
          <img src={openImage} alt="Preview" className="max-h-full max-w-full rounded" loading="eager" />
        </div>
      )}
    </div>
  );
};

export default ChefchaouenBlueCityDetails;

