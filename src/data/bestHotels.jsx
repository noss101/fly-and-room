import React from 'react'

const iconClass = 'inline-block w-5 h-5 mr-1 text-[#272724]';

const IconCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={iconClass}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M5 13l4 4L19 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={iconClass}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 4.5 2-7L2 9h7z" />
  </svg>
);

const IconBed = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={iconClass}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path d="M3 10h18v8H3z" strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 10V7h10v3" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconCar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={iconClass}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path d="M3 13l2-5h14l2 5v5H3z" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="7.5" cy="18" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

export const bestHotels = [
  {
    slug: 'tanger-hilton-al-houara-resort-spa',
    title: 'Tanger-Hilton Al Houara Resort & Spa',
    description:
      'Beachfront luxury resort 15 minutes from Tangier Airport, set in a protected national park.',
    details: (
      <>
        <p>
          <strong>Hilton Al Houara Resort &amp; Spa – All-In-One Luxury Near Tangier</strong>
        </p>
        <p>
          Located just 15 minutes from Tangier Ibn Battouta Airport, Hilton Al
          Houara Resort &amp; Spa is a 5-star beachfront resort offering a
          perfect mix of comfort, Moroccan culture, and nature. Set in a
          25-hectare protected national park with direct beach access, this
          resort is ideal for couples, families, and solo travelers.
        </p>
        <p>
          <strong>Top Reasons to Stay</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Only 15 minutes from Tangier Airport</li>
          <li>2 hours from Casablanca via high-speed train</li>
          <li>Quiet, peaceful location outside city noise</li>
          <li>Direct access to a 5-kilometer beach</li>
          <li>Surrounded by lush protected landscapes</li>
        </ul>
        <p>
          <strong>Hotel Highlights</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>304 modern rooms, including 18 luxury suites</li>
          <li>50 fully equipped apartments for families</li>
          <li>3 swimming pools (heated, kids, oceanfront)</li>
          <li>850m² Eforea Spa with jacuzzi, sauna &amp; fitness center</li>
          <li>5 on-site restaurants offering international &amp; Moroccan cuisine</li>
        </ul>
        <p>
          <strong>Dining Options</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Argan: All-day international buffet</li>
          <li>Tucano: Poolside tapas &amp; DJ entertainment</li>
          <li>L’Olivier: Mediterranean fine dining experience</li>
          <li>Rose Bar: Lobby cocktails &amp; light bites</li>
          <li>Cig’Art Lounge: Premium cigars and spirits</li>
        </ul>
        <p>
          <strong>Wellness &amp; Relaxation</strong>
        </p>
        <p>
          The resort’s Eforea Spa is designed for total relaxation with modern
          therapy rooms, hammams, and 24-hour fitness access. A beauty salon and
          wellness treatments offer guests a complete pampering experience.
        </p>
        <p>
          <strong>Nearby Attractions</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>Historic Tangier Medina</li>
          <li>Cap Spartel &amp; Hercules Caves</li>
          <li>Asilah coastal village</li>
          <li>Local markets and Moroccan cafés</li>
        </ul>
        <p>
          <strong>Upcoming Features</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>18-hole golf course under development</li>
          <li>9-hole pitch &amp; putt golf academy with lighting</li>
        </ul>
        <p>
          <strong>Final Thoughts</strong>
        </p>
        <p>
          Hilton Al Houara Resort &amp; Spa is more than a destination – it’s a
          full Moroccan escape. With premium rooms, delicious dining,
          world-class amenities, and nearby cultural gems, your stay will be
          unforgettable.
        </p>
        <p>
          <a
            href="https://www3.hilton.com/en/hotels/morocco/hilton-tangier-al-houara-resort-and-spa-TNGAHHI/index.html"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book at Hilton Al Houara
          </a>
        </p>
          <div className="mt-8">
            <iframe
              title="Hilton Al Houara Resort & Spa Map"
              src="https://www.google.com/maps?q=M28M%2BXM%20Tangier&output=embed"
              width="100%"
              height="300"
              className="w-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
      </>
    ),
    image: '/images/tanger_hiltonalhouara.jpg',
    images: [
      '/images/tanger_hiltonalhouara_1.jpg',
      '/images/tanger_hiltonalhouara_02.jpg',
      '/images/tanger_hiltonalhouara_3.jpg',
      '/images/tanger_hiltonalhouara_4.jpg',
      '/images/tanger_hiltonalhouara_5.jpg',
      '/images/tanger_hiltonalhouara_6.jpg',
      '/images/tanger_hiltonalhouara_7.jpg',
      '/images/tanger_hiltonalhouara_8.jpg',
      '/images/tanger_hiltonalhouara_9.jpg',
      '/images/tanger_hiltonalhouara_10.jpg'
    ]
  },
  {
    slug: 'royal-mansour-marrakech',
    title: 'AG Hotel & Spa Marrakech',
    description: 'Palatial retreat featuring private riads and exceptional service.',
    details: (
      <>
        <div className="max-w-4xl mx-auto p-6">
          <p>
            <strong>AG Hôtel &amp; Spa Marrakech – Where Elegance Meets Comfort</strong>
          </p>
          <p>
            Welcome to <strong>AG Hôtel &amp; Spa Marrakech</strong>, where luxury and relaxation come together to create a truly memorable stay. More than just a place to sleep, AG Hôtel offers an experience designed for both leisure and business travelers, with personalized service at every turn.
          </p>
          <p>
            <strong>Why Choose AG Hôtel &amp; Spa Marrakech?</strong>
          </p>
          <ul className="list-disc pl-5">
            <li>Located at the gateway to Marrakech’s historic medina</li>
            <li>Elegant blend of contemporary design and Moroccan charm</li>
            <li>Warm, attentive service focused on guest satisfaction</li>
            <li>Peaceful atmosphere with garden and mountain views</li>
          </ul>
          <p>
            <strong>Rooms &amp; Suites: Your Ideal Refuge</strong>
          </p>
          <ul className="list-disc pl-5">
            <li>Spacious, light-filled rooms and suites</li>
            <li>Contemporary décor with Moroccan touches</li>
            <li>Modern technology and comforts</li>
            <li>Beautiful views of lush gardens or distant mountains</li>
          </ul>
          <p>
            <strong>Culinary Excellence</strong>
          </p>
          <p>
            Enjoy a culinary journey where <strong>Moroccan tradition</strong> meets <strong>international creativity</strong>. Dishes are crafted with seasonal ingredients and served with elegance in the hotel’s fine dining spaces.
          </p>
          <p>
            <strong>Spa &amp; Wellness: Relax, Recharge, Rejuvenate</strong>
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Spa &amp; sauna:</strong> Detox, improve circulation, and achieve deep relaxation</li>
            <li><strong>Custom massages:</strong> Tailored treatments using natural essential oils</li>
            <li><strong>Fitness center:</strong> State-of-the-art gym with personal trainers</li>
            <li><strong>Group classes:</strong> Stay active and inspired during your stay</li>
          </ul>
          <p>
            <strong>Nearby Highlights</strong>
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Marrakech Medina</li>
            <li>Koutoubia Mosque</li>
            <li>Majorelle Garden</li>
            <li>Jemaa el-Fnaa square</li>
            <li>Saadian Tombs</li>
          </ul>
          <p>
            Whether you’re here to unwind, explore, or both — <strong>AG Hôtel &amp; Spa Marrakech</strong> promises to make your visit truly unforgettable.
          </p>
          <p>
            <a
              href="https://www.booking.com/Share-tI5xQa9"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Stay at AG Hôtel &amp; Spa
            </a>
          </p>
        </div>
      </>
    ),
    image: '/images/aghotel.jpg',
    images: [
      '/images/ag hotel3.jpg',
      '/images/aghotel2.jpg',
      '/images/aghotel2.jpg',
      '/images/aghotel4.jpg',
      '/images/aghotel5.jpg'
    ]
  },
  {
    slug: 'stayhere-rabat-agdal-4-hotel',
    title: 'Stayhere Rabat - Agdal 4 Hotel',
    description:
      "Modern comfort in Rabat's Agdal district with stylish rooms and free Wi-Fi.",
    details: (
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Stayhere Rabat - Agdal 4 Hotel — Your Comfortable Urban Retreat
        </h1>
        <p className="mb-4">
          Stay at <strong>Stayhere Rabat - Agdal 4 Hotel</strong> for modern
          comfort in the heart of Rabat's Agdal district. Located just 1.9 km
          from the National Library of the Kingdom of Morocco, this hotel offers
          stylish rooms with air conditioning and free Wi-Fi — ideal for both
          business and leisure travelers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Why Guests Love It
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Prime location in Rabat’s
            Agdal neighborhood
          </li>
          <li>
            <IconCheck /> Close to major
            attractions:
            <ul className="list-disc list-inside ml-6">
              <li>National Library of Morocco (1.9 km)</li>
              <li>Hassan Tower (4.3 km)</li>
              <li>Kasbah of the Udayas (4.5 km)</li>
              <li>Rabat Beach (4.5 km)</li>
            </ul>
          </li>
          <li>
            <IconCheck /> Surrounded by cafés: Café
            Atlantique, Liliane, Café Zuma
          </li>
          <li>
            <IconCheck /> 12 km from Rabat-Salé
            Airport, with shuttle service available
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Room Features
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Air conditioning
          </li>
          <li>
            <IconCheck /> Private bathroom with
            shower or bathtub
          </li>
          <li>
            <IconCheck /> Flat-screen TV (cable,
            satellite, streaming services)
          </li>
          <li>
            <IconCheck /> Coffee machine and
            electric kettle
          </li>
          <li>
            <IconCheck /> Some units with kitchen
            (fridge, microwave, stovetop)
          </li>
          <li>
            <IconCheck /> Family rooms available
          </li>
          <li>
            <IconCheck /> Non-smoking rooms
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Transport &amp; Services
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Near Rabat Agdal (1.6 km)
            and Rabat Ville (2.8 km) stations
          </li>
          <li>
            <IconCheck /> Airport shuttle (extra
            charge)
          </li>
          <li>
            <IconCheck /> Concierge, express
            check-in/out
          </li>
          <li>
            <IconCheck /> In-room safe, 24/7
            security
          </li>
          <li>
            <IconCheck /> Free Wi-Fi throughout the
            property
          </li>
        </ul>

        <p className="mb-6">
          Whether you're visiting Rabat for work, family, or adventure,{' '}
          <strong>Stayhere Rabat - Agdal 4 Hotel</strong> offers a modern,
          convenient base to explore the city.
        </p>

        <a
          href="https://www.booking.com/Share-g32DqBt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Check Availability &amp; Book Now
        </a>

        <div className="mt-8">
          <iframe
            title="Stayhere Rabat - Agdal 4 Hotel Map"
            src="https://maps.app.goo.gl/T7WwYGzFCNQjiztG6"
            width="100%"
            height="300"
            className="w-full rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    ),
    image: '/images/stayhere.jpg',
    images: [
      '/images/stay here5.jpg',
      '/images/stayhere1.jpg',
      '/images/stayhere2.jpg',
      '/images/stayhere3.jpg',
      '/images/stayhere4.jpg',
      '/images/stayhere6.jpg',
      '/images/stayhere7.jpg'
    ]
  },
  {
    slug: 'sofitel-casablanca',
    title: 'Sofitel Casablanca Tour Blanche',
    description: 'Sophisticated hotel in the heart of Casablanca\'s business district.',
    details: 'Enjoy panoramic city views and French-inspired elegance a short walk from the historic medina.',
    image: 'https://source.unsplash.com/featured/?casablanca,hotel'
  },
  {
    slug: 'riad-fes',
    title: 'Riad Fes',
    description: 'Elegant riad blending traditional architecture with modern comfort.',
    details: 'Located in Fes\' ancient medina, Riad Fes offers a serene escape with rooftop views and authentic design.',
    image: 'https://source.unsplash.com/featured/?fes,riad'
  }
];
