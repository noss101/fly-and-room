import React, { createContext, useState, useContext } from 'react';

const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [activeWidget, setActiveWidget] = useState('hotel-flight');

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