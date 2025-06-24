import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4 flex flex-col sm:flex-row items-center justify-between z-50">
      <p className="mb-2 sm:mb-0 text-center sm:text-left text-sm">
        This website uses cookies to enhance the user experience.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
