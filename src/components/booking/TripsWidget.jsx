import React, { useEffect, useRef } from 'react';

// Preload the script on mount so the widget is ready when shown

const TripsWidget = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const container = document.getElementById('trips-widget-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src =
      'https://tpwidg.com/content?currency=USD&trs=429618&shmarker=636307.636307&product=1114537%2C1114028%2C1114534%2C1106931&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948';
    script.async = true;
    script.charset = 'utf-8';

    container.appendChild(script);
    loaded.current = true;
  }, []);

  return <div id="trips-widget-container" className="w-full shadow-lg"></div>;
};

export default TripsWidget;
