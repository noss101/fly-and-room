import React from 'react';
import ServicesSection from '../components/sections/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#272724]">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the range of travel services we offer to make your journey seamless and memorable.
        </p>
      </div>
      <ServicesSection animate={false} />
    </div>
  );
};

export default ServicesPage;