import React from 'react';

const FindLocation = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-white to-amber-50 p-4 lg:p-12 min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Text Section - Appears first on mobile, second on desktop */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-start lg:pl-12 order-1 lg:order-2 mb-8 lg:mb-0 relative z-10">
        <div className="flex items-center mb-6">
          <div className="bg-[#A68F6C] w-4 h-32 mr-4 transform transition-all duration-500 hover:w-5 hover:h-36"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333] tracking-wider transform transition-transform duration-500 hover:scale-105">
            FIND A NEARBY
            <br />
            <span className="text-amber-700">LOCATION</span>
          </h2>
        </div>
        <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed transform transition-all duration-500 hover:text-gray-800">
          Are you craving a juicy, hand-cut steak or delicious seafood dish? Look no further than Stoney River! Our upscale steakhouse locations offer a variety of mouth-watering options for any taste.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center bg-amber-100 px-4 py-2 rounded-full transform transition-all duration-300 hover:scale-105">
            <span className="text-amber-700 mr-2">📍</span>
            <span className="text-amber-800 font-medium">Multiple Locations</span>
          </div>
          <div className="flex items-center bg-amber-100 px-4 py-2 rounded-full transform transition-all duration-300 hover:scale-105">
            <span className="text-amber-700 mr-2">🍽️</span>
            <span className="text-amber-800 font-medium">Fine Dining</span>
          </div>
          <div className="flex items-center bg-amber-100 px-4 py-2 rounded-full transform transition-all duration-300 hover:scale-105">
            <span className="text-amber-700 mr-2">🥩</span>
            <span className="text-amber-800 font-medium">Premium Steaks</span>
          </div>
        </div>
        <a
          href="#"
          className="group bg-gradient-to-r from-[#A68F6C] to-[#8F795B] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center"
        >
          FIND A STONEY RIVER
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      
      {/* Image Section - Appears second on mobile, first on desktop */}
      <div className="lg:w-1/2 w-full order-2 lg:order-1 relative z-10">
        <div className="relative group">
          <img
            src="https://stoneyriver.com/wp-content/uploads/2023/06/About-Us-Nearby-Location.jpg"
            alt="A cozy, upscale restaurant interior with a fireplace."
            className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl"
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          
          {/* Floating badges */}
          <div className="absolute top-4 right-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform transition-all duration-500 hover:scale-110">
            Now Open
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-amber-700 px-3 py-1 rounded-full text-sm font-bold shadow-lg transform transition-all duration-500 hover:scale-110">
            Reserve Today
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindLocation;