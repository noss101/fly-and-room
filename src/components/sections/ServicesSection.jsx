import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "Flight Bookings",
      description: "Find the best flight deals to destinations worldwide with our easy-to-use booking platform.",
      icon: "✈️",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Hotel Reservations",
      description: "Discover accommodations for every budget, from luxury resorts to cozy guesthouses.",
      icon: "🏨",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Car Rentals",
      description: "Rent a car for your travels and explore at your own pace with our competitive rates.",
      icon: "🚗",
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Travel Packages",
      description: "All-inclusive packages combining flights, hotels, and activities for the perfect vacation.",
      icon: "🎒",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Local Experiences",
      description: "Book unique tours and activities to truly immerse yourself in local culture.",
      icon: "🌍",
      color: "bg-red-100 text-red-800"
    },
    {
      title: "24/7 Support",
      description: "Our travel experts are available around the clock to assist with your travel needs.",
      icon: "📞",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02]">
          <div className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link to="/" className="text-primary font-semibold hover:underline">
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;