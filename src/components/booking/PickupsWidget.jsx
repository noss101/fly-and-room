import React, { useEffect, useRef } from 'react';

// Preload the script at mount time so the widget shows instantly on switch

const PickupsWidget = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const script = document.createElement('script');
    script.src =
      'https://tpwidg.com/content?trs=425059&shmarker=636307.636307&locale=en&show_header=true&powered_by=true&campaign_id=627&promo_id=8951';
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('pickups-widget-container');
    if (container) {
      container.appendChild(script);
      loaded.current = true;
    }
  }, []);

  return <div id="pickups-widget-container" className="w-full shadow-lg"></div>;
};

export default PickupsWidget;
