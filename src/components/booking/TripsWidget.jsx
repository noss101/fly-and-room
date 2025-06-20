import React, { useEffect } from 'react';

const TripsWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?currency=USD&trs=425059&shmarker=636307.636307&language=en&locale=260932&layout=responsive&cards=4&powered_by=true&campaign_id=89&promo_id=3947";
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('trips-widget-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="trips-widget-container" className="w-full shadow-lg"></div>;
};

export default TripsWidget;
