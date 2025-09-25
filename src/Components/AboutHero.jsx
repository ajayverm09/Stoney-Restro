import React from 'react';

const AboutHero = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 1.2s ease-out forwards;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
      
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center p-4 overflow-hidden"
        style={{
          backgroundImage: `url('https://stoneyriver.com/wp-content/uploads/2023/07/SR_WebsitePhotos_1404x667_Atmosphere2.jpg')`,
        }}
      >
        {/* Animated overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 animate-fadeIn"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6 animate-scaleIn">
            <span className="inline-block px-4 py-2 bg-amber-700 text-white text-sm font-bold rounded-full uppercase tracking-wider mb-6">
              Since 1999
            </span>
          </div>
          
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slideUp">
            ABOUT STONEY
            <br />
            <span className="text-amber-400">RIVER</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light animate-slideUp animate-delay-300">
              We strive to create a rare and elevated dining experience that you'll want to come back for again and
              again. From the moment you walk through our doors, you'll be impressed by our upscale atmosphere and
              impeccable attention to detail.
            </p>
            
            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light mt-4 animate-slideUp animate-delay-600">
              Our menu features hand-cut, dry-aged steaks that are expertly prepared to perfection over a wood-fired grill, 
              with an emphasis on quality and flavor. Join us for quintessential steakhouse dining that's done to perfection every time.
            </p>
          </div>
          
          <div className="mt-10 animate-slideUp animate-delay-600">
            <div className="inline-flex items-center bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg cursor-pointer">
              Our Story
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default AboutHero;