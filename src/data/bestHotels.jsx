import React from 'react'

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
    details: 'Owned by the Moroccan royal family, Royal Mansour showcases exquisite craftsmanship and unparalleled luxury.',
    image: '/images/aghotel.jpg'
  },
  {
    slug: 'kasbah-tamadot',
    title: 'Kasbah Tamadot',
    description: 'Hidden gem in the Atlas Mountains offering breathtaking views.',
    details: 'Part of Richard Branson\'s collection, Kasbah Tamadot blends Berber hospitality with boutique comfort.',
    image: 'https://source.unsplash.com/featured/?atlas,mountains,hotel'
  },
  {
    slug: 'four-seasons-marrakech',
    title: 'Four Seasons Resort Marrakech',
    description: 'Contemporary resort with sprawling pools and tranquil gardens.',
    details: 'This resort provides easy access to the medina while delivering renowned Four Seasons luxury and relaxation.',
    image: 'https://source.unsplash.com/featured/?resort,marrakech'
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
