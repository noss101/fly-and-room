import React, { useEffect } from 'react';

const PickupsWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tpwidg.com/content?trs=425059&shmarker=636307.636307&locale=en&show_header=true&powered_by=true&campaign_id=627&promo_id=8951';
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('pickups-widget-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="pickups-widget-container" className="w-full shadow-lg"></div>;
};

export default PickupsWidget;
