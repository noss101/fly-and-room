export const localExperiences = [
  {
    slug: 'marrakech-luxury-riads',
    title: 'Marrakech Tour and Places for Tourists',
    description:
      'Discover the charm of Marrakech, where tradition meets modern life. This vibrant city offers an unforgettable experience for tourists, with its lively streets, colorful souks, and historic landmarks.',
    details: (
      <div className="p-4 bg-white rounded shadow-2xl">
        <h2 className="text-2xl font-bold mb-3">
          Marrakech Tour and Places for Tourists
        </h2>
        <p className="mb-3">
          Discover the charm of Marrakech, where tradition meets modern life.
          This vibrant city offers an unforgettable experience for tourists, with
          its lively streets, colorful souks, and historic landmarks.
        </p>

        <h3 className="text-xl font-semibold mb-2">Top Places to Visit</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <p>
              <strong>Jemaa el-Fnaa:</strong> The heart of Marrakech, known for
              its street performers, food stalls, and local crafts.
            </p>
            <a href="/images/Jemaa el-Fnaa.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Jemaa el-Fnaa.jpg"
                alt="Jemaa el-Fnaa"
                className="mt-2 w-full h-40 object-cover rounded cursor-pointer"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <p>
              <strong>Koutoubia Mosque:</strong> The city's iconic landmark with
              a beautiful minaret visible from many parts of Marrakech.
            </p>
            <a href="/images/Koutoubia Mosque.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Koutoubia Mosque.jpg"
                alt="Koutoubia Mosque"
                className="mt-2 w-full h-40 object-cover rounded cursor-pointer"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <p>
              <strong>Bahia Palace:</strong> A stunning 19th-century palace
              showcasing traditional Moroccan architecture and gardens.
            </p>
            <a href="/images/Bahia Palace.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Bahia Palace.jpg"
                alt="Bahia Palace"
                className="mt-2 w-full h-40 object-cover rounded cursor-pointer"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <p>
              <strong>Majorelle Garden:</strong> A peaceful botanical garden
              filled with exotic plants and vibrant colors.
            </p>
            <a href="/images/Majorelle Garden.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Majorelle Garden.jpg"
                alt="Majorelle Garden"
                className="mt-2 w-full h-40 object-cover rounded cursor-pointer"
              />
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <p>
              <strong>Souks of Marrakech:</strong> Explore narrow alleys lined
              with shops selling spices, leather goods, textiles, and more.
            </p>
            <a href="/images/Souks of Marrakech.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/Souks of Marrakech.jpg"
                alt="Souks of Marrakech"
                className="mt-2 w-full h-40 object-cover rounded cursor-pointer"
              />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">Why Choose Marrakech</h3>
        <p className="mb-3">
          Marrakech offers a mix of culture, history, and warm hospitality.
          Whether you're wandering through ancient palaces or enjoying a mint tea
          in a traditional café, the city promises a unique experience that
          blends the past with the present.
        </p>

      </div>
    ),
    image: '/images/MarrakechLuxuryRiads.jpg'
  },
  {
    slug: 'sahara-desert-adventures',
    title: 'Sahara Desert Adventures',
    description: 'Camel treks, desert camping, and star gazing in the majestic Sahara.',
    details: 'Embark on camel rides across rolling dunes, spend nights under a starlit sky, and witness breathtaking desert landscapes.',
    image: '/images/SaharaDesertAdventures.jpg'
  },
  {
    slug: 'atlas-mountain-trekking',
    title: 'Atlas Mountain Trekking',
    description: 'Hike through breathtaking landscapes and visit traditional Berber villages.',
    details: 'Explore the rugged Atlas mountain range with local guides and discover the rich culture of Berber communities.',
    image: '/images/AtlasMountainTrekking.jpg'
  },
  {
    slug: 'essaouira-coastal-charm',
    title: 'Essaouira Coastal Charm',
    description: 'Relax in this charming coastal town with its blue fishing boats and fresh seafood.',
    details: 'Stroll through the fortified medina, watch the vibrant fishing port in action, and sample fresh Atlantic seafood.',
    image: '/images/EssaouiraCoastalCharm.jpg'
  },
  {
    slug: 'fes-cultural-immersion',
    title: 'Fes Cultural Immersion',
    description: "Explore the world's oldest medieval city and its vibrant artisan quarters.",
    details: 'Lose yourself in narrow alleys of the Fes medina and meet artisans preserving centuries-old crafts.',
    image: '/images/FesCulturalImmersion.jpg'
  },
  {
    slug: 'chefchaouen-blue-city',
    title: 'Chefchaouen Blue City',
    description: "Discover the magical blue-washed streets of Morocco's most photogenic city.",
    details: 'Wander through blue-hued alleys, enjoy panoramic mountain views, and experience this unique destination.',
    image: '/images/ChefchaouenBlueCity.jpg'
  }
];
