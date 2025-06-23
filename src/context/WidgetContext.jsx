import React, { createContext, useState, useContext } from 'react';

const WidgetContext = createContext();

const getDefaultWidget = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('service') || 'hotel-flight';
};

export const WidgetProvider = ({ children }) => {
  const [activeWidget, setActiveWidget] = useState(getDefaultWidget());

  const switchWidget = (widgetType) => {
    setActiveWidget(widgetType);
  };

  return (
    <WidgetContext.Provider value={{ activeWidget, switchWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = () => useContext(WidgetContext);

