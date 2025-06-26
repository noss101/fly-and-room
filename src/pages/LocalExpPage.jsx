import React from 'react';
import { localExperiences } from '../data/localExperiences.jsx';
import LocalExpCard from '../components/LocalExpCard.jsx';

const LocalExpPage = () => {
  const experiences = localExperiences;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#272724]">
          Local <span className="text-primary">Experiences</span> in Morocco
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover authentic Moroccan experiences that will make your trip unforgettable. 
          From desert adventures to cultural immersions, we've curated the best local experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <LocalExpCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default LocalExpPage;
