import React from 'react';
import { motion } from 'framer-motion';

const StoneyRiverMenu = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(166, 143, 108, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center justify-center bg-white w-full min-h-screen p-0 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column - Text Content */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 xl:px-24 py-12 lg:py-0"
        variants={itemVariants}
      >
        <div className="flex items-center mb-6 md:mb-8">
          <motion.div 
            className="bg-[#A68F6C] w-4 h-36 mr-4"
            initial={{ height: 0 }}
            animate={{ height: 144 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] tracking-wider"
            variants={itemVariants}
          >
            STONEY RIVER MENU
            <br />
            AND SPECIALITY
            <br />
            WINES
          </motion.h2>
        </div>
        
        <motion.p 
          className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-2xl"
          variants={itemVariants}
        >
          Our menu is designed to take your taste buds on a journey, from
          classic steakhouse favorites to unique and inventive dishes. And our
          wine list? Let's just say it's the cherry on top of a truly unforgettable
          dining experience. Our team is always on hand to help you make the
          perfect selection to complement your meal.
        </motion.p>
        
        <motion.a
          href="#"
          className="bg-[#A68F6C] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#8F795B] transition-colors duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          VIEW OUR MENU
        </motion.a>
      </motion.div>
      
      {/* Right Column - Image */}
      <motion.div 
        className="w-full lg:w-1/2 h-96 lg:h-auto"
        variants={imageVariants}
        whileHover="hover"
      >
        <img
          src="https://stoneyriver.com/wp-content/uploads/2023/07/SR_WebsiteImages_Wine.jpg"
          alt="Two people toasting with red wine glasses in an upscale restaurant."
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default StoneyRiverMenu;