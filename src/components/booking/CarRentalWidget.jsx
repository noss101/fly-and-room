import React, { useEffect, useRef } from 'react';

// Preload the widget script once the component mounts to avoid delays when
// switching between widgets.

const CarRentalWidget = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const script = document.createElement('script');
    script.src =
      "https://tpwidg.com/content?trs=429618&shmarker=636307.636307&powered_by=true&country=99&city=491&lang=en&width=100&background=light&logo=true&header=true&gearbox=false&cars=true&border=false&footer=true&campaign_id=87&promo_id=4322";
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

export default CarRentalWidget
