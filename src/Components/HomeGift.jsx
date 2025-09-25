import React from 'react';
import { motion } from 'framer-motion';

const GiftCardSection = () => {
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
    hidden: { scale: 0.9, opacity: 0, rotate: 15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 6,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      rotate: 3,
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
      y: -5,
      boxShadow: "0px 10px 20px rgba(153, 129, 91, 0.3)",
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

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 }
    }
  };

  return (
    <motion.div 
      className="bg-white w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Text Content - Appears first on mobile, second on desktop */}
        <motion.div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0 w-full" variants={itemVariants}>
          <div className="flex items-start">
            <motion.div 
              className="w-4 bg-[#99815b] mr-4" 
              variants={barVariants}
            ></motion.div>
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-serif font-bold leading-tight uppercase tracking-wide text-gray-800 mb-4"
                variants={itemVariants}
              >
                GIFT CARDS
              </motion.h2>
            </div>
          </div>
          <motion.p 
            className="mt-6 text-sm md:text-base font-sans leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            Looking for the perfect gift? Share the joy of dining at Stoney River. From birthdays and graduations to anniversaries and thank you gifts, sharing a Stoney River gift card with someone you love is a simple and easy way to share an unforgettable meal.
          </motion.p>
          <motion.a
            href="#"
            className="mt-8 bg-[#99815b] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 uppercase tracking-wider flex items-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            BUY A GIFT CARD
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>

        {/* Gift Card Image - Appears second on mobile, first on desktop */}
        <motion.div 
          className="lg:w-1/2 w-full order-2 lg:order-1 lg:pr-12 relative flex justify-center lg:justify-start"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="w-[250px] md:w-[300px] lg:w-[350px] relative">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/036/730/947/small/ai-generated-dining-tables-under-a-lights-on-a-roof-covered-in-trees-free-photo.jpg"
              alt="Stoney River Gift Card"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
            {/* Logo overlay */}
            <motion.img
              src="https://stoneyriver.com/wp-content/uploads/2023/06/SR-Logo_White.png"
              alt="Stoney River Logo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 lg:w-40"
              variants={logoVariants}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GiftCardSection;