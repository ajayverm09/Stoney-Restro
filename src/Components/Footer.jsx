import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const linkVariants = {
    hover: {
      x: 5,
      color: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      color: "#ffffff",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.footer 
      className="bg-[url('https://stoneyriver.com/wp-content/themes/bluestrap-child/assets/images/darkgrey-pattern.png')] text-gray-400 font-sans tracking-wide w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Footer Section */}
      <div className="container mx-auto py-16 px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {/* Logo Section */}
          <motion.div 
            className="flex flex-col items-start justify-center"
            variants={itemVariants}
          >
            <motion.img 
              src="https://stoneyriver.com/wp-content/themes/bluestrap-child/assets/images/white-logo.png" 
              alt="Stoney River Steakhouse and Grill" 
              className="h-auto w-48 md:w-64 lg:w-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Restaurant Services */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold text-white mb-4 uppercase"
              variants={itemVariants}
            >
              RESTAURANT SERVICES
            </motion.h3>
            <ul className="space-y-4 text-lg">
              {[
                "RESERVATIONS", 
                "ORDER ONLINE", 
                "MENUS AND LOCATIONS", 
                "PRIVATE DINING"
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Stoney River */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold text-white mb-4 uppercase"
              variants={itemVariants}
            >
              ABOUT STONEY RIVER
            </motion.h3>
            <ul className="space-y-4 text-lg">
              {[
                { text: "ABOUT US", href: "/about" },
                { text: "CAREERS", href: "#" },
                { text: "NEWS", href: "/blogs" },
                { text: "DINING GUIDELINES", href: "#" }
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={item.href} 
                    className="hover:text-white transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold text-white mb-4 uppercase"
              variants={itemVariants}
            >
              CUSTOMER SERVICE
            </motion.h3>
            <ul className="space-y-4 text-lg">
              {[
                { text: "CONTACT US", href: "/contact" },
                { text: "FIND A STONEY RIVER", href: "#" },
                { text: "GIFT CARDS", href: "#" },
                { text: "SITEMAP", href: "#" }
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={item.href} 
                    className="hover:text-white transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-right"
          variants={itemVariants}
        >
          <motion.a 
            href="#" 
            className="text-[#D4C0A2] hover:text-white transition-colors text-lg md:text-xl uppercase inline-block"
            whileHover={{ 
              scale: 1.05,
              color: "#ffffff"
            }}
            transition={{ duration: 0.3 }}
          >
            VISIT OUR <span className='text-[#99815B] underline font-bold'>J.ALEXANDER</span> RESTAURANTS
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Footer Section */}
      <motion.div 
        className="bg-[#2a2a2a] py-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-full">
          <motion.p 
            className="text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © 2025 STONEY RIVER. ALL RIGHTS RESERVED
          </motion.p>
          
          <motion.div 
            className="flex items-center text-xs md:text-sm mt-4 md:mt-0 space-x-4 md:space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              "TERMS OF USE", 
              "PRIVACY POLICY", 
              "ALLERGEN INFORMATION"
            ].map((item, index) => (
              <React.Fragment key={index}>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
                {index < 2 && <span className="text-gray-600">|</span>}
              </React.Fragment>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex items-center mt-4 md:mt-0 space-x-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="#" 
              aria-label="Instagram"
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="Facebook"
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;