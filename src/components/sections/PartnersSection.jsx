import React from 'react';

const PartnersSection = () => (
  <div className="container mx-auto px-4 my-8">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-[#272724]">
      Our Partners
    </h3>
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
      <img
        src="/icons/esimparicon.png"
        alt="eSIM partner"
        className="h-16 sm:h-20 md:h-24 w-auto"
      />
      <img
        src="/icons/localrenticonpar.png"
        alt="LocalRent partner"
        className="h-16 sm:h-20 md:h-24 w-auto"
      />
      <img
        src="/icons/pickupsparicon.png"
        alt="Pickups partner"
        className="h-16 sm:h-20 md:h-24 w-auto"
      />
      <img
        src="/icons/tripiconpar.png"
        alt="Trip partner"
        className="h-16 sm:h-20 md:h-24 w-auto"
      />
    </div>
  </div>
);

export default PartnersSection;
