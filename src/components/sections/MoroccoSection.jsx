import React from 'react';

const MoroccoSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Find Cheap Flights and Hotels in
            <span className="inline-flex items-center">
             Morocco
              <img src="/icons/moroccoflag.png" alt="Morocco flag" className="w-6 h-6 ml-2 inline-block" />
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Explore Morocco with great deals on flights and accommodations. Search for affordable travel options and compare prices on top hotels in Marrakech, Casablanca, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoroccoSection;