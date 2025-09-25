import React from 'react';
import { motion } from 'framer-motion';

const VipSection = () => {
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
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 20px rgba(92, 74, 63, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100px",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <motion.div 
      className="bg-black text-white w-full py-20 px-4 md:px-8 lg:px-16 text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-wide leading-tight mb-6 relative inline-block"
          variants={itemVariants}
        >
          BECOME A STONEY RIVER VIP
          <motion.span 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#5c4a3f] rounded-full"
            variants={underlineVariants}
          ></motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Join our VIP club to stay up-to-date with all Stoney River news, features and special events.
        </motion.p>
        
        <motion.button
          className="bg-[#5c4a3f] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          JOIN NOW
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VipSection;