import React, { useEffect } from 'react';

const TripsWidget = () => {
  useEffect(() => {
    const container = document.getElementById('trips-widget-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src =
      'https://widgets.tiqets.com/content?currency=USD&trs=425059&shmarker=636307.636307&language=en&layout=responsive&cards=4&powered_by=true&campaign_id=89&promo_id=3947';
    script.async = true;
    script.charset = 'utf-8';
    script.crossOrigin = 'anonymous';
    script.onerror = () => {
      container.textContent = 'Failed to load trips.';
    };

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div id="trips-widget-container" className="w-full shadow-lg"></div>;
};

export default TripsWidget;
