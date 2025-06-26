import React from 'react';
import { Link } from 'react-router-dom';

const LocalExpCard = ({ experience }) => {
  return (
    <Link
      to={`/local-exp/${experience.slug}`}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
    >
      <img
        src={experience.image ? experience.image : `/localexp/${experience.slug}.svg`}
        alt={experience.title}
        className="h-48 w-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
        <p className="text-gray-600 mb-4">{experience.description}</p>
        <span className="text-primary font-semibold hover:underline">
          Discover Experience
        </span>
      </div>
    </Link>
  );
};

export default LocalExpCard;
