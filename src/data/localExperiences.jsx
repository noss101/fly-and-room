import React from 'react';
import MarrakechTourDetails from '../components/MarrakechTourDetails.jsx';
import SaharaDesertDetails from '../components/SaharaDesertDetails.jsx';
import EssaouiraTourDetails from '../components/EssaouiraTourDetails.jsx';
import ChefchaouenBlueCityDetails from '../components/ChefchaouenBlueCityDetails.jsx';

export const localExperiences = [
  {
    slug: 'marrakech-luxury-riads',
    title: 'Marrakech Tour and Places for Tourists',
    description:
      'Discover the charm of Marrakech, where tradition meets modern life. This vibrant city offers an unforgettable experience for tourists, with its lively streets, colorful souks, and historic landmarks.',
    details: <MarrakechTourDetails />,
    image: '/images/MarrakechLuxuryRiads.jpg'
  },
  {
    slug: 'sahara-desert-adventures',
    title: 'Sahara Desert Adventures',
    description: 'Camel treks, desert camping, and star gazing in the majestic Sahara.',
    details: <SaharaDesertDetails />,
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
    details: <EssaouiraTourDetails />,
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
    details: <ChefchaouenBlueCityDetails />,
    image: '/images/ChefchaouenBlueCity.jpg'
  }
];
