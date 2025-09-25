import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      y: -8,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "6rem",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    }
  };

  return (
    <motion.div 
      className="relative bg-black w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('https://stoneyriver.com/wp-content/uploads/2023/07/SR_WebsitePhotos_1404x667_Atmosphere3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8 max-w-4xl">
        {/* Enhanced heading with more styling */}
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white uppercase tracking-wide mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          CONTACT US
        </motion.h2>
        
        {/* Added subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-white font-light mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We'd love to hear from you. Reach out for reservations or inquiries.
        </motion.p>
        
        {/* Enhanced buttons with icons and better styling */}
        <motion.div 
          className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 justify-center items-center w-full"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            className="group px-8 py-4 bg-[#a78b6f] text-white font-semibold rounded-full shadow-lg flex items-center space-x-3 w-full sm:w-auto justify-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>RESERVATIONS</span>
          </motion.a>
          
          <motion.a
            href="#"
            className="group px-8 py-4 bg-[#a78b6f] text-white font-semibold rounded-full shadow-lg flex items-center space-x-3 w-full sm:w-auto justify-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Shopping cart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>ORDER ONLINE</span>
          </motion.a>
        </motion.div>
        
        {/* Added decorative element */}
        <motion.div 
          className="mt-16 flex justify-center"
          variants={lineVariants}
        >
          <div className="w-24 h-1 bg-[#a78b6f] rounded-full"></div>
        </motion.div>
      </div>
      
      {/* Added bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
          transition: { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ContactHero;