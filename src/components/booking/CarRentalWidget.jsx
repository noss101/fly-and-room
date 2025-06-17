import React, { useEffect } from 'react';

const CarRentalWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://c87.travelpayouts.com/content?trs=425059&shmarker=636307.636307&powered_by=true&country=99&city=461&lang=en&width=100&background=light&logo=true&header=true&gearbox=false&cars=false&border=false&footer=true&promo_id=4322";
    script.async = true;
    script.charset = 'utf-8';
    
    const container = document.getElementById('car-rental-widget-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="car-rental-widget-container" className="w-full"></div>;
};

export default CarRentalWidget;