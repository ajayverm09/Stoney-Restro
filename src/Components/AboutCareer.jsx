import React from 'react';

const CareerSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-white to-amber-50 p-4 lg:p-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-start lg:pr-12 mb-6 lg:mb-0 relative z-10">
        <div className="flex items-center mb-4">
          <div className="bg-[#A68F6C] w-1.5 h-24 mr-4 transform transition-all duration-500 hover:w-2 hover:h-28"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333] tracking-wider transform transition-transform duration-500 hover:scale-105">
            START YOUR CAREER
            <br />
            <span className="text-amber-700">AT STONEY RIVER</span>
          </h2>
        </div>
        <p className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed transform transition-all duration-500 hover:text-gray-800">
          Are you ready to join the ranks of culinary excellence at Stoney River?
          We're always on the lookout for passionate individuals to join our
          team and help us create unforgettable dining experiences for our
          guests. We offer a wide range of opportunities for growth and
          development. Come work with us today!
        </p>
        <a
          href="#"
          className="group bg-gradient-to-r from-[#A68F6C] to-[#8F795B] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 flex items-center"
        >
          APPLY NOW
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full relative z-10">
        <div className="relative group">
          <img
            src="https://stoneyriver.com/wp-content/uploads/2023/05/SR_WebsitePhotos_800x800_Hiring-1.jpg"
            alt="A smiling team of restaurant staff in black uniforms."
            className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl"
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          
          {/* Floating badges */}
          <div className="absolute top-4 right-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform transition-all duration-500 hover:scale-110">
            Hiring Now
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-amber-700 px-3 py-1 rounded-full text-sm font-bold shadow-lg transform transition-all duration-500 hover:scale-110">
            Join Our Team
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;