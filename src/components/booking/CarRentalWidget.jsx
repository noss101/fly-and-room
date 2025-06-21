import React, { useEffect, useRef } from 'react';

const CarRentalWidget = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const script = document.createElement('script');
    script.src =
      "https://c87.travelpayouts.com/content?trs=425059&shmarker=636307.636307&powered_by=true&country=99&city=461&lang=en&width=100&background=light&logo=true&header=true&gearbox=false&cars=false&border=false&footer=true&promo_id=4322";
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('car-rental-widget-container');
    if (container) {
      container.appendChild(script);
      loaded.current = true;
    }
  }, []);

  return <div id="car-rental-widget-container" className="w-full shadow-lg"></div>;
};

export default CarRentalWidget;