import React from 'react';
import { motion } from 'framer-motion';

const DiningSection = () => {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(153, 129, 91, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  const barVariants = {
    hidden: { height: 0 },
    visible: {
      height: "4rem",
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* First Section - White Background */}
      <motion.div 
        className="bg-white text-black w-full py-16 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Text Content */}
          <motion.div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 w-full" variants={itemVariants}>
            <div className="flex items-start">
              <motion.div 
                className="w-1.5 bg-[#99815b] mr-4" 
                variants={barVariants}
              ></motion.div>
              <div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-serif font-bold leading-tight uppercase tracking-wide mb-4"
                  variants={itemVariants}
                >
                  UNFORGETTABLE
                  <br />
                  FINE DINING
                  <br />
                  EXPERIENCE
                </motion.h2>
              </div>
            </div>
            <motion.p 
              className="mt-6 text-sm md:text-base font-sans leading-relaxed text-gray-700"
              variants={itemVariants}
            >
              Stoney River is an upscale steakhouse, specializing in hand-cut
              steaks, fresh seafood selections, signature salads and house
              specialties. Whether relaxing at the bar or dining in the
              comfortable atmosphere, our mission is to provide the highest
              quality food in a polished environment, delivered by professional
              servers with a sense of genuine hospitality.
            </motion.p>
            <motion.a
              href="#"
              className="mt-8 inline-block bg-[#99815b] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-colors duration-300 uppercase tracking-wider"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              BROWSE STONEY RIVER'S MENU
            </motion.a>
          </motion.div>

          {/* Large Image */}
          <motion.div 
            className="lg:w-1/2 w-full"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src="https://stoneyriver.com/wp-content/uploads/2023/07/SR_WebsiteImages_Steak2.jpg"
              alt="A plate of steak with a glass of wine"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Second Section - Black Background */}
      <motion.div 
        className="bg-black text-white text-center w-full py-24 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold leading-tight uppercase tracking-wide mb-6"
            variants={itemVariants}
          >
            THE BEST OF CONTEMPORARY
            <br />
            AMERICAN RESTAURANTS
          </motion.h2>
          <motion.p 
            className="mt-6 text-sm md:text-base font-sans leading-relaxed text-gray-300"
            variants={itemVariants}
          >
            We believe outstanding contemporary American restaurants prioritize
            exceptional food, thoughtful service, and consistent experiences
            that make guests feel like family. This philosophy guides us in
            providing the finest dining experiences.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default DiningSection;