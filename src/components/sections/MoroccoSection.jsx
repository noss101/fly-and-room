import React from 'react';
import { Link } from 'react-router-dom';
import { localExperiences } from '../../data/localExperiences';
import ServicesSection from './ServicesSection';

const MoroccoSection = () => {
  const previewExperiences = localExperiences.slice(0, 3);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-8">
        <div className="bg-[#272724] rounded-3xl shadow-2xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Find Cheap Flights and Hotels in{' '}
            <span className="inline-flex items-center">
              Morocco
              <img src="/icons/moroccoflag.png" alt="Morocco flag" className="w-6 h-6 ml-2 inline-block" />
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Explore Morocco with great deals on flights and accommodations. Search for affordable travel options and compare prices on top hotels in Marrakech, Casablanca, and beyond.
          </p>
          <Link
            to="/services"
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90"
          >
            Our Services
          </Link>
        </div>
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Places for Tourists
            <span className="inline-flex items-center">
              <img src="/icons/moroccoflag.png" alt="Morocco flag" className="w-6 h-6 ml-2 inline-block" />
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Discover Morocco's must-see attractions and unique cultural experiences from bustling souks to serene desert camps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-left">
            {previewExperiences.map((exp, index) => (
              <Link
                key={index}
                to={`/local-exp/${exp.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <img
                  src={exp.image ? exp.image : `/localexp/${exp.slug}.svg`}
                  alt={exp.title}
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              </Link>
            ))}
          </div>
        <Link
          to="/local-exp"
          className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90"
        >
          Explore Local Experiences
        </Link>
      </div>
      <div className="bg-[#272724] shadow-2xl p-8 text-center text-white w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">All in One</h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-6">
          Browse all of our travel services in a single place and start planning your adventure today.
        </p>
        <ServicesSection />
      </div>
    </div>
  </section>
);
};

export default MoroccoSection;