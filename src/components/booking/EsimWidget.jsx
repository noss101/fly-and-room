import React, { useEffect } from 'react';

const EsimWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tpwidg.com/content?trs=425059&shmarker=636307.636307&locale=en&powered_by=true&color_button=%23ff5733&color_focused=%23f2685f&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23000000ff&border_radius=5&plain=false&no_labels=true&promo_id=8588&campaign_id=541';
    script.async = true;
    script.charset = 'utf-8';

    const container = document.getElementById('esim-widget-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="esim-widget-container" className="w-full shadow-lg"></div>;
};

export default EsimWidget;
