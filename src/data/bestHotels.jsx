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
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Top Reasons to Stay
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Only 15 minutes from Tangier Airport
          </li>
          <li>
            <IconCheck /> 2 hours from Casablanca via high-speed train
          </li>
          <li>
            <IconCheck /> Quiet, peaceful location outside city noise
          </li>
          <li>
            <IconCheck /> Direct access to a 5-kilometer beach
          </li>
          <li>
            <IconCheck /> Surrounded by lush protected landscapes
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Hotel Highlights
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> 304 modern rooms, including 18 luxury suites
          </li>
          <li>
            <IconCheck /> 50 fully equipped apartments for families
          </li>
          <li>
            <IconCheck /> 3 swimming pools (heated, kids, oceanfront)
          </li>
          <li>
            <IconCheck /> 850m² Eforea Spa with jacuzzi, sauna &amp; fitness center
          </li>
          <li>
            <IconCheck /> 5 on-site restaurants offering international &amp; Moroccan cuisine
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Dining Options
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Argan: All-day international buffet
          </li>
          <li>
            <IconCheck /> Tucano: Poolside tapas &amp; DJ entertainment
          </li>
          <li>
            <IconCheck /> L’Olivier: Mediterranean fine dining experience
          </li>
          <li>
            <IconCheck /> Rose Bar: Lobby cocktails &amp; light bites
          </li>
          <li>
            <IconCheck /> Cig’Art Lounge: Premium cigars and spirits
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Wellness &amp; Relaxation
        </h2>
        <p>
          The resort’s Eforea Spa is designed for total relaxation with modern
          therapy rooms, hammams, and 24-hour fitness access. A beauty salon and
          wellness treatments offer guests a complete pampering experience.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Nearby Attractions
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Historic Tangier Medina
          </li>
          <li>
            <IconCheck /> Cap Spartel &amp; Hercules Caves
          </li>
          <li>
            <IconCheck /> Asilah coastal village
          </li>
          <li>
            <IconCheck /> Local markets and Moroccan cafés
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Upcoming Features
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> 18-hole golf course under development
          </li>
          <li>
            <IconCheck /> 9-hole pitch &amp; putt golf academy with lighting
          </li>
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
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Why Choose AG Hôtel &amp; Spa Marrakech?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Located at the gateway to Marrakech’s historic medina
          </li>
          <li>
            <IconCheck /> Elegant blend of contemporary design and Moroccan charm
          </li>
          <li>
            <IconCheck /> Warm, attentive service focused on guest satisfaction
          </li>
          <li>
            <IconCheck /> Peaceful atmosphere with garden and mountain views
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Rooms &amp; Suites: Your Ideal Refuge
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Spacious, light-filled rooms and suites
          </li>
          <li>
            <IconCheck /> Contemporary décor with Moroccan touches
          </li>
          <li>
            <IconCheck /> Modern technology and comforts
          </li>
          <li>
            <IconCheck /> Beautiful views of lush gardens or distant mountains
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Culinary Excellence
        </h2>
        <p>
          Enjoy a culinary journey where <strong>Moroccan tradition</strong> meets <strong>international creativity</strong>. Dishes are crafted with seasonal ingredients and served with elegance in the hotel’s fine dining spaces.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Spa &amp; Wellness: Relax, Recharge, Rejuvenate
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> <strong>Spa &amp; sauna:</strong> Detox, improve circulation, and achieve deep relaxation
          </li>
          <li>
            <IconCheck /> <strong>Custom massages:</strong> Tailored treatments using natural essential oils
          </li>
          <li>
            <IconCheck /> <strong>Fitness center:</strong> State-of-the-art gym with personal trainers
          </li>
          <li>
            <IconCheck /> <strong>Group classes:</strong> Stay active and inspired during your stay
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Nearby Highlights
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <IconCheck /> Marrakech Medina
          </li>
          <li>
            <IconCheck /> Koutoubia Mosque
          </li>
          <li>
            <IconCheck /> Majorelle Garden
          </li>
          <li>
            <IconCheck /> Jemaa el-Fnaa square
          </li>
          <li>
            <IconCheck /> Saadian Tombs
          </li>
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
    slug: 'fes-marriott-hotel-jnan-palace',
    title: 'Fes Marriott Hotel Jnan Palace',
    description:
      'Luxury hotel with gardens, pool, spa, and easy access to Fez attractions.',
    details: (
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Fes Marriott Hotel Jnan Palace — Luxury in the Heart of Fez
        </h1>
        <p className="mb-4">
          Discover comfort and elegance at{' '}
          <strong>Fes Marriott Hotel Jnan Palace</strong>, located in Fez’s
          vibrant new quarter. This 5-star property features air-conditioned
          rooms, lush gardens, and top-tier amenities including an outdoor
          pool, gym, and spa.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Why Stay Here?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Central location,
            close to:
            <ul className="list-disc list-inside ml-6">
              <li>Royal Palace of Fez (2.8 km)</li>
              <li>Bab Bou Jeloud (4.2 km)</li>
              <li>Medersa Bouanania (4.4 km)</li>
              <li>Karaouiyne Mosque (5 km)</li>
            </ul>
          </li>
          <li>
            <IconCheck /> Outdoor swimming pool
            with sun loungers &amp; pool bar
          </li>
          <li>
            <IconCheck /> 6 restaurants serving
            Moroccan &amp; international cuisine
          </li>
          <li>
            <IconCheck /> Free private parking
            on-site
          </li>
          <li>
            <IconCheck /> Airport shuttle
            available (13 km to Fez Sais Airport)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Room &amp; Facility
          Highlights
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Air-conditioned rooms
            with balconies
          </li>
          <li>
            <IconCheck /> Views of the gardens or
            pool
          </li>
          <li>
            <IconCheck /> Flat-screen TV, free
            Wi-Fi, lift access
          </li>
          <li>
            <IconCheck /> En-suite bathrooms with
            free toiletries
          </li>
          <li>
            <IconCheck /> Modern fitness center
            &amp; spa
          </li>
          <li>
            <IconCheck /> Library &amp; relaxation
            lounge
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Extra Experiences
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Spa with sauna, massages, and wellness treatments
          </li>
          <li>
            <IconCheck /> Live music, cultural tours, and themed dinners
          </li>
          <li>
            <IconCheck /> Bike rentals and nearby golf (Royal Golf de Fez)
          </li>
        </ul>

        <p className="mb-6">
          Whether you’re visiting Fez for business or leisure,{' '}
          <strong>Fes Marriott Hotel Jnan Palace</strong> promises a luxurious
          stay with Moroccan hospitality at its finest.
        </p>

        <a
          href="https://www.booking.com/Share-tUQ4Ij"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Check Availability &amp; Book Now
        </a>
      </section>
    ),
    image: '/images/fes.jpg',
    images: [
      '/images/fes1.jpg',
      '/images/fes2.jpg',
      '/images/fes3.jpg',
      '/images/fes4.jpg',
      '/images/fes5.jpg',
      '/images/fes6.jpg',
      '/images/fes7.jpg'
    ]
  },
  {
    slug: 'stayhere-casablanca-gauthier-1-modern-residence',
    title: 'Stayhere Casablanca - Gauthier 1 - Modern Residence',
    description:
      'Modern residence in downtown Casablanca offering stylish accommodation and free Wi-Fi.',
    details: (
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Stayhere Casablanca - Gauthier 1 — Modern Comfort in Downtown
          Casablanca
        </h1>
        <p className="mb-4">
          <strong>Stayhere Casablanca - Gauthier 1 - Modern Residence</strong>
          {" "}
          offers stylish, air-conditioned accommodation in the heart of
          Casablanca. Just a short distance from Hassan II Mosque and Anfa
          Place Living Resort, it provides modern amenities with free Wi-Fi and
          private parking.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Why Choose This Residence?
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Prime location near:
            <ul className="list-disc list-inside ml-6">
              <li>Arab League Park (400 m)</li>
              <li>Anfa Place Living Resort (4.5 km)</li>
              <li>Hassan II Mosque (4.6 km)</li>
              <li>Casablanca Marina (within 5 km)</li>
            </ul>
          </li>
          <li>
            <IconCheck /> Access to garden and terrace for relaxation
          </li>
          <li>
            <IconCheck /> Free private parking — no reservation needed
          </li>
          <li>
            <IconCheck /> Complimentary Wi-Fi throughout the property
          </li>
          <li>
            <IconCheck /> 27 km from Mohammed V International Airport
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Accommodation Features
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Air conditioning
          </li>
          <li>
            <IconCheck /> Private bathroom with shower and free toiletries
          </li>
          <li>
            <IconCheck /> Kitchenette with fridge, oven, stovetop, microwave,
            coffee maker
          </li>
          <li>
            <IconCheck /> Flat-screen TV with streaming (like Netflix)
          </li>
          <li>
            <IconCheck /> Non-smoking rooms
          </li>
          <li>
            <IconCheck /> Lift access to upper floors
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Nearby Dining
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Hasnae Anfa Café (100 m)</li>
          <li>Cocktail Dream Bar (350 m)</li>
          <li>Casa Jose Gauthier Restaurant (100 m)</li>
        </ul>

        <p className="mb-6">
          <strong>Stayhere Casablanca - Gauthier 1</strong> is the ideal base for
          exploring the city while enjoying a comfortable, modern stay.
        </p>

        <a
          href="https://www.booking.com/Share-HaBbrHy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Check Availability &amp; Book Now
        </a>
      </section>
    ),
    image: '/images/stayherecasa.jpg',
    images: [
      '/images/stayhere8.jpg',
      '/images/stayherecasa2.jpg',
      '/images/stayherecasa3.jpg',
      '/images/stayherecasa4.jpg',
      '/images/stayherecasa5.jpg',
      '/images/stayherecasa6.jpg',
      '/images/stayherecasa7.jpg',
      '/images/stayherecasa9.jpg'
    ]
  },
  {
    slug: 'chefchaouen-hotel-alkhalifa',
    title: 'Chefchaouen Hotel Alkhalifa',
    description:
      'Traditional Moroccan architecture with modern comforts in the heart of Chefchaouen.',
    details: (
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Hotel Alkhalifa — Traditional Charm in Chefchaouen
        </h1>
        <p className="mb-4">
          <strong>Hotel Alkhalifa</strong> blends traditional Moroccan architecture
          with modern comforts, offering air-conditioned rooms, a beautiful garden,
          and a terrace with mountain views. Located just minutes from Chefchaouen’s
          historic sites, it’s the perfect base for your adventure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Why Guests Love It
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Prime location near:
            <ul className="list-disc list-inside ml-6">
              <li>Kasba (500 m)</li>
              <li>Outa El Hammam Square (600 m)</li>
              <li>Mohammed V Square (1.2 km)</li>
            </ul>
          </li>
          <li>
            <IconCheck /> Peaceful garden and sun terrace
          </li>
          <li>
            <IconCheck /> Free Wi-Fi throughout the property
          </li>
          <li>
            <IconCheck /> Family-friendly rooms available
          </li>
          <li>
            <IconCheck /> About 130 km from Tangier Ibn Battuta Airport
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Room Highlights
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Air conditioning
          </li>
          <li>
            <IconCheck /> Private bathroom with shower, free toiletries, hairdryer
          </li>
          <li>
            <IconCheck /> Flat-screen TV with satellite channels
          </li>
          <li>
            <IconCheck /> Some rooms with mountain or street views
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Nearby Dining
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>El Jaleo Restaurant (50 m)</li>
          <li>Smalt Café (250 m)</li>
          <li>Toda Creperie (450 m)</li>
        </ul>

        <p className="mb-6">
          Experience the unique charm of Chefchaouen from{' '}
          <strong>Hotel Alkhalifa</strong> — where traditional style meets warm
          hospitality.
        </p>

        <a
          href="https://www.booking.com/Share-SDRs9cA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Check Availability &amp; Book Now
        </a>
      </section>
    ),
    image: '/images/chefchaoun.jpg',
    images: [
      '/images/chef10.jpg',
      '/images/chef11.jpg',
      '/images/chef12.jpg',
      '/images/chef2.jpg',
      '/images/chef3.jpg',
      '/images/chef4.jpg',
      '/images/chef5.jpg',
      '/images/chef6.jpg',
      '/images/chef7.jpg',
      '/images/chef8.jpg',
      '/images/chef9.jpg',
      '/images/chefchaoun.jpg'
    ]
  },
  {
    slug: 'agadir-stayhere-beachfront-escape',
    title: 'Agadir StayHere Beachfront Escape',
    description:
      'Modern beachfront apartments in Agadir with free Wi-Fi and sea or city views.',
    details: (
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          StayHere Beachfront Escape — Your Seaside Getaway in Agadir
        </h1>
        <p className="mb-4">
          <strong>StayHere Beachfront Escape</strong> offers modern beachfront
          accommodation in the heart of Agadir. Just 500 meters from Agadir
          Beach, this residence features air-conditioned rooms, free Wi-Fi, and
          stunning views of the sea or city.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconStar /> Why Guests Love It
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Excellent location near:
            <ul className="list-disc list-inside ml-6">
              <li>Agadir Beach (500 m)</li>
              <li>Marina Agadir (900 m)</li>
              <li>Agadir Oufella Ruins (1.2 km)</li>
              <li>Amazighe Heritage Museum (4 km)</li>
            </ul>
          </li>
          <li>
            <IconCheck /> Beachfront property with terrace
          </li>
          <li>
            <IconCheck /> Free Wi-Fi throughout
          </li>
          <li>
            <IconCheck /> Family-friendly with spacious apartments
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconBed /> Apartment Features
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <IconCheck /> Air conditioning
          </li>
          <li>
            <IconCheck /> Private bathroom with shower, bathtub, and hairdryer
          </li>
          <li>
            <IconCheck /> Fully equipped kitchen: fridge, oven, microwave,
            dishwasher, stovetop, coffee maker
          </li>
          <li>
            <IconCheck /> Flat-screen TV
          </li>
          <li>
            <IconCheck /> Balcony or patio with sea or city views
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          <IconCar /> Nearby Dining
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Coffeeshop Company (600 m)</li>
          <li>Herguita Restaurant (550 m)</li>
          <li>Café Courmet (700 m)</li>
        </ul>

        <p className="mb-6">
          Discover a blend of comfort and convenience at{' '}
          <strong>StayHere Beachfront Escape</strong> — the ideal choice for a
          relaxing stay by the sea.
        </p>

        <a
          href="https://www.booking.com/Share-rJ7MF0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Check Availability &amp; Book Now
        </a>
      </section>
    ),
    image: '/images/agadirstayhere.jpg',
    images: [
      '/images/agadirstayhere10.jpg',
      '/images/agadirstayhere2.jpg',
      '/images/agadirstayhere3.jpg',
      '/images/agadirstayhere4.jpg',
      '/images/agadirstayhere5.jpg',
      '/images/agadirstayhere6.jpg',
      '/images/agadirstayhere7.jpg',
      '/images/agadirstayhere8.jpg',
      '/images/agadirstayhere9.jpg'
    ]
  }
];
