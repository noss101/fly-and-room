import React, { useEffect, useRef } from 'react';

// Preload the widget script on mount so switching widgets feels instant
// This avoids fetching the script only when the widget becomes active


const HotelFlightWidget = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const script = document.createElement('script');
    script.src =
      "https://tpwidg.com/content?trs=425059&shmarker=636307.636307&locale=en&curr=USD&powered_by=true&border_radius=0&plain=false&color_button=%230c58bb&color_button_text=%23ffffff&color_border=%230c58bb&promo_id=4132&campaign_id=121";
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('hotel-flight-widget-container');
    if (container) {
      container.appendChild(script);
      loaded.current = true;
    }
  }, []);

  return <div id="hotel-flight-widget-container" className="w-full shadow-lg"></div>;
};

export default HotelFlightWidget
