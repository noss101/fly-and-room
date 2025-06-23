import React, { useEffect } from 'react';
import { useWidget } from '../../context/WidgetContext';
import { useSearchParams } from 'react-router-dom';
import HotelFlightWidget from './HotelFlightWidget';
import CarRentalWidget from './CarRentalWidget';
import TripsWidget from './TripsWidget';
import PickupsWidget from './PickupsWidget';
import EsimWidget from './EsimWidget';

const BookingWidget = () => {
  const { activeWidget, switchWidget } = useWidget();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const service = searchParams.get('service');
    if (service && service !== activeWidget) {
      switchWidget(service);
    }
    // Only run this effect when the query parameter changes
  }, [searchParams, activeWidget, switchWidget]);

  return (
    <div
      id="booking-widget"
      className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-4xl mx-auto"
    >
      <div className="mb-6 text-center">
        <p
          className="text-2xl sm:text-3xl md:text-4xl"
          style={{ color: '#272724' }}
        >
          All in One Place for Your Next Journey.
        </p>
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
          <img src="/icons/newflighticon.png" alt="Flights & Hotels" className="w-8 h-8 mr-2" />
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
          <img src="/icons/newcarrentalicon.png" alt="Car Rental" className="w-8 h-8 mr-2" />
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
        <div className={activeWidget === 'hotel-flight' ? '' : 'hidden'}>
          <HotelFlightWidget />
        </div>
        <div className={activeWidget === 'car-rental' ? '' : 'hidden'}>
          <CarRentalWidget />
        </div>
        <div className={activeWidget === 'trips' ? '' : 'hidden'}>
          <TripsWidget />
        </div>
        <div className={activeWidget === 'pickups' ? '' : 'hidden'}>
          <PickupsWidget />
        </div>
        <div className={activeWidget === 'esim' ? '' : 'hidden'}>
          <EsimWidget />
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
