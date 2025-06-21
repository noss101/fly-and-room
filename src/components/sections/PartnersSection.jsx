import React from 'react';

const PartnersSection = () => (
  <div className="container mx-auto px-4 my-8">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-[#272724]">
      Our Partners
    </h3>
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
      {["/icons/esimparicon.png", "/icons/localrenticonpar.png", "/icons/pickupsparicon.png", "/icons/tripiconpar.png"].map((src) => (
        <div
          key={src}
          style={{
            WebkitMask: `url(${src}) no-repeat center / contain`,
            mask: `url(${src}) no-repeat center / contain`,
            backgroundColor: "#272724",
          }}
          className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24"
        />
      ))}
    </div>
  </div>
);

export default PartnersSection;
