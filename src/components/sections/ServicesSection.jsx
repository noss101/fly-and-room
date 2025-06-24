import React from 'react';
import { Link } from 'react-router-dom';
import { useWidget } from '../../context/WidgetContext';

const ServicesSection = ({ animate = true }) => {
  const { switchWidget } = useWidget();

  const services = [
    {
      title: 'Flights & Hotels',
      description: 'Search and book flights and hotels in one place.',
      iconSrc: '/icons/newflighticon.png',
      color: 'bg-blue-100',
      link: '/?service=hotel-flight#booking-widget',
      widget: 'hotel-flight',
    },
    {
      title: 'Car Rental',
      description: 'Find the best rates on car rentals for your trip.',
      iconSrc: '/icons/newcarrentalicon.png',
      color: 'bg-orange-100',
      link: '/?service=car-rental#booking-widget',
      widget: 'car-rental',
    },
    {
      title: 'Trips',
      description: 'Discover exciting trips and tours across Morocco.',
      iconSrc: '/icons/tripsicon.png',
      color: 'bg-purple-100',
      link: '/?service=trips#booking-widget',
      widget: 'trips',
    },
    {
      title: 'Pickups',
      description: 'Arrange hassle-free airport pickups and transfers.',
      iconSrc: '/icons/pickupsicon.png',
      color: 'bg-green-100',
      link: '/?service=pickups#booking-widget',
      widget: 'pickups',
    },
    {
      title: 'eSIM',
      description: 'Stay connected abroad with affordable eSIM plans.',
      iconSrc: '/icons/esimicon.png',
      color: 'bg-yellow-100',
      link: '/?service=esim#booking-widget',
      widget: 'esim',
    },
  ];

  const scrollingServices = animate ? [...services, ...services] : services;

  return (
    <div className={animate ? 'overflow-hidden' : ''}>
      <div
        className={`flex ${
          animate ? 'w-max space-x-8 animate-marquee' : 'flex-wrap justify-center gap-8'
        }`}
      >
        {scrollingServices.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            onClick={() => {
              switchWidget(service.widget);
              setTimeout(() => {
                const el = document.getElementById('booking-widget');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }, 0);
            }}
            className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02]"
          >
          <div
            className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
          >
            {service.iconSrc ? (
              <img
                src={service.iconSrc}
                alt={service.title}
                className="w-8 h-8"
                loading="lazy"
              />
            ) : (
              service.icon
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
            <span className="text-primary font-semibold hover:underline">Book Now</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
