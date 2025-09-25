import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
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

  return (
    <motion.section 
      className="relative w-full h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://stoneyriver.com/wp-content/uploads/2023/07/StoneyRiver_Homepage.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay with gradient for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full px-4 md:px-8">
        <motion.h2 
          className="text-white text-3xl md:text-4xl lg:text-5xl font-script mb-4"
          variants={itemVariants}
        >
          Welcome to
        </motion.h2>
        
        <motion.h1 
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-wider"
          variants={itemVariants}
        >
          Stoney River <br /> Steakhouse and Grill
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full max-w-2xl justify-center"
          variants={itemVariants}
        >
          {[
            { text: "Reservations", href: "#reservations" },
            { text: "Order Online", href: "#order-online" },
            { text: "Private Dining", href: "#private-dining" }
          ].map((button, i) => (
            <motion.a
              key={i}
              href={button.href}
              className="bg-[#99815b] text-white font-semibold uppercase px-6 py-3 rounded transition-colors duration-300 flex-1 max-w-xs md:max-w-none"
              variants={buttonVariants}
              custom={i}
              whileHover="hover"
              whileTap="tap"
            >
              {button.text}
            </motion.a>
          ))}
        </motion.div>
        
        {/* Decorative element */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#99815b] rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: "6rem", 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.8 }
          }}
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;