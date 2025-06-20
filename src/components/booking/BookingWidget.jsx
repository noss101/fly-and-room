import React from 'react';
import { useWidget } from '../../context/WidgetContext';
import HotelFlightWidget from './HotelFlightWidget';
import CarRentalWidget from './CarRentalWidget';
import TripsWidget from './TripsWidget';
import PickupsWidget from './PickupsWidget';
import EsimWidget from './EsimWidget';

const BookingWidget = () => {
  const { activeWidget, switchWidget } = useWidget();

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <img
            src="/logos/mainlogo.png"
            alt="Fly and Room Logo"
            className="h-9 mr-2"
          />
          <h1 className="text-4xl font-bold">
            <span className="text-[#0c58bb]">Fly</span>
            <span className="text-[#ff5733]">&room.</span>
          </h1>
        </div>
        <p className="text-gray-600 kapakana-450">Let Morocco Shift Your Soul.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeWidget === 'hotel-flight'
              ? 'bg-[#0c58bb] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => switchWidget('hotel-flight')}
        >
          {/* Updated icon size from w-6 h-6 to w-8 h-8 */}
          <img src="/icons/flyhotel.png" alt="Flights & Hotels" className="w-8 h-8 mr-2" />
          Flights & Hotels
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeWidget === 'car-rental'
              ? 'bg-[#0c58bb] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => switchWidget('car-rental')}
        >
          <img src="/icons/carrental.png" alt="Car Rental" className="w-8 h-8 mr-2" />
          Car Rental
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeWidget === 'trips'
              ? 'bg-[#0c58bb] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => switchWidget('trips')}
        >
          <img src="/icons/tripsicon.png" alt="Trips" className="w-8 h-8 mr-2" />
          Trips
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeWidget === 'pickups'
              ? 'bg-[#0c58bb] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => switchWidget('pickups')}
        >
          <img src="/icons/pickupsicon.png" alt="Pickups" className="w-8 h-8 mr-2" />
          Pickups
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-lg transition-all ${
            activeWidget === 'esim'
              ? 'bg-[#0c58bb] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => switchWidget('esim')}
        >
          <img src="/icons/esimicon.png" alt="eSIM" className="w-8 h-8 mr-2" />
          eSIM
        </button>
      </div>
      <div className="widget-container min-h-[300px]">
        {activeWidget === 'hotel-flight' && <HotelFlightWidget />}
        {activeWidget === 'car-rental' && <CarRentalWidget />}
        {activeWidget === 'trips' && <TripsWidget />}
        {activeWidget === 'pickups' && <PickupsWidget />}
        {activeWidget === 'esim' && <EsimWidget />}
      </div>
    </div>
  );
};

export default BookingWidget;