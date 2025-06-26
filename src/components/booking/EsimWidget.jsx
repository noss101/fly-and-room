import React, { useEffect, useRef } from 'react';

// Preload the eSIM script so the component renders immediately when selected

const EsimWidget = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    const script = document.createElement('script');
    script.src =
      'https://tpwidg.com/content?trs=429618&shmarker=636307.636307&locale=en&powered_by=true&color_button=%232426DAff&color_focused=%23f2685f&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=5&plain=false&no_labels=true&promo_id=8588&campaign_id=541';
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('esim-widget-container');
    if (container) {
      container.appendChild(script);
      loaded.current = true;
    }
  }, []);

  return <div id="esim-widget-container" className="w-full shadow-lg"></div>;
};

export default EsimWidget;
