import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { localExperiences } from '../data/localExperiences';

const LocalExpDetailPage = () => {
  const { slug } = useParams();
  const exp = localExperiences.find((e) => e.slug === slug);

  if (!exp) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-gray-600">Experience not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#272724]">
        {exp.title}
      </h1>
      <p className="text-gray-700 mb-8">{exp.details}</p>
      <Link to="/local-exp" className="text-primary font-semibold hover:underline">
        &larr; Back to experiences
      </Link>
    </div>
  );
};

export default LocalExpDetailPage;
