import React from 'react';

const LocalExpPage = () => {
  const experiences = [
    {
      title: "Marrakech Luxury Riads",
      description: "Experience authentic Moroccan hospitality in beautifully restored traditional houses.",
      image: "/images/marrakech-riad.jpg"
    },
    {
      title: "Sahara Desert Adventures",
      description: "Camel treks, desert camping, and star gazing in the majestic Sahara.",
      image: "/images/sahara-desert.jpg"
    },
    {
      title: "Atlas Mountain Trekking",
      description: "Hike through breathtaking landscapes and visit traditional Berber villages.",
      image: "/images/atlas-mountains.jpg"
    },
    {
      title: "Essaouira Coastal Charm",
      description: "Relax in this charming coastal town with its blue fishing boats and fresh seafood.",
      image: "/images/essaouira.jpg"
    },
    {
      title: "Fes Cultural Immersion",
      description: "Explore the world's oldest medieval city and its vibrant artisan quarters.",
      image: "/images/fes-medina.jpg"
    },
    {
      title: "Chefchaouen Blue City",
      description: "Discover the magical blue-washed streets of Morocco's most photogenic city.",
      image: "/images/chefchaouen.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Local <span className="text-primary">Experiences</span> in Morocco
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover authentic Moroccan experiences that will make your trip unforgettable. 
          From desert adventures to cultural immersions, we've curated the best local experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-xl"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <button className="text-primary font-semibold hover:underline">
                Discover Experience
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalExpPage;