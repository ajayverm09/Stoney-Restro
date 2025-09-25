import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUtensils, FaHome, FaInfoCircle, FaBlog, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const location = useLocation();
  const isMenuOpenRef = useRef(isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome className="text-lg" /> },
    { name: 'About Us', path: '/about', icon: <FaInfoCircle className="text-lg" /> },
    { name: 'Blogs', path: '/blogs', icon: <FaBlog className="text-lg" /> },
    { name: 'Contact Us', path: '/contact', icon: <FaEnvelope className="text-lg" /> },

  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Keep ref updated
  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (isMenuOpenRef.current) {
        setShowMobileNavbar(true);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowMobileNavbar(false);
        } else {
          setShowMobileNavbar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  // Animation variants
  const navbarVariants = {
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    },
    hidden: { 
      y: -100, 
      opacity: 0 
    }
  };

  const linkVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    }
  };

  const mobileMenuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    },
    closed: {
      y: 20,
      opacity: 0
    }
  };

  const socialIconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 10,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className='w-full overflow-hidden'>
      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden lg:flex fixed w-full z-50 top-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-xl py-2'
            : 'bg-transparent py-4'
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate={showMobileNavbar ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <motion.img
                src={
                  isScrolled
                    ? 'https://stoneyriver.com/wp-content/uploads/2023/06/SR-Logo_Black.png'
                    : 'https://stoneyriver.com/wp-content/uploads/2023/06/SR-Logo_White.png'
                }
                alt="Stoney River Logo"
                className={`h-12 w-auto transition-all duration-500 ${
                  isScrolled ? '' : 'filter brightness-0 invert'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>

          {/* Nav Links */}
          <div className="flex items-center space-x-4 ml-10">
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
              >
                <Link
                  to={item.path}
                  className={`relative px-5 py-2 font-bold uppercase text-lg transition-colors duration-500 ${
                    isActive(item.path)
                      ? 'text-white bg-[#99815b] rounded-md'
                      : isScrolled
                      ? 'text-[#9A7F53] hover:text-[#99815b]'
                      : 'text-white hover:text-[#ffd57f]'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeIndicator"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Book Now */}
            <motion.div
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
            >
              <Link
                to="#"
                className="ml-4 px-5 py-2 bg-[#99815b] text-white font-bold uppercase rounded-md flex items-center hover:bg-[#7a6548] transition-colors duration-300"
              >
                <FaUtensils className="mr-2" /> Book Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className={`lg:hidden fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-xl py-2'
            : 'bg-black/40 backdrop-blur-md py-3'
        } ${showMobileNavbar ? 'translate-y-0' : '-translate-y-full'}`}
        variants={navbarVariants}
        initial="hidden"
        animate={showMobileNavbar ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <motion.img
                src={
                  isScrolled
                    ? 'https://stoneyriver.com/wp-content/uploads/2023/06/SR-Logo_Black.png'
                    : 'https://stoneyriver.com/wp-content/uploads/2023/06/SR-Logo_White.png'
                }
                alt="Stoney River Logo"
                className={`h-10 w-auto transition-all duration-500 ${
                  isScrolled ? '' : 'filter brightness-0 invert'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className={`p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-[#9A7F53]' : 'text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden w-full h-full"
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          
          {/* Menu Panel */}
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-0 right-0 h-full w-full max-w-md bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <Link to="/" onClick={toggleMenu}>
                <img
                  src="https://stoneyriver.com/wp-content/uploads/2023/06/SR-Logo_White.png"
                  alt="Stoney River Logo"
                  className="h-10 w-auto"
                />
              </Link>
              <motion.button
                onClick={toggleMenu}
                className="p-2 text-white rounded-full hover:bg-gray-700 transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="h-6 w-6" />
              </motion.button>
            </div>

            <div className="p-5">
              <h3 className="text-white text-lg font-bold uppercase mb-4 px-2">Navigation</h3>
              <div className="space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={mobileMenuItemVariants}
                    initial="closed"
                    animate="open"
                    custom={idx}
                  >
                    <Link
                      to={item.path}
                      onClick={toggleMenu}
                      className={`group flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-[#99815b] text-white shadow-lg'
                          : 'text-gray-300 hover:bg-[#99815b]/30 hover:text-white'
                      }`}
                    >
                      <motion.span 
                        className={`mr-3 transition-transform duration-300 group-hover:scale-110 ${
                          isActive(item.path) ? 'text-white' : 'text-[#99815b]'
                        }`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.name}</span>
                      {isActive(item.path) && (
                        <motion.span 
                          className="ml-auto"
                          initial={{ width: 0 }}
                          animate={{ width: '1rem' }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 pt-6 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-lg font-bold uppercase mb-4 px-2">Quick Actions</h3>
                <Link
                  to="#"
                  onClick={toggleMenu}
                  className="group flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#99815b] to-[#7a6548] text-white font-bold uppercase rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.span 
                    className="mr-2"
                    whileHover={{ rotate: 12 }}
                  >
                    <FaUtensils />
                  </motion.span>
                  Book Now
                </Link>
              </motion.div>

              <motion.div 
                className="mt-8 pt-6 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white text-lg font-bold uppercase mb-4 px-2">Contact Info</h3>
                <div className="space-y-3 text-gray-300 px-2">
                  <motion.p 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#99815b] mr-2">📞</span>
                    (123) 456-7890
                  </motion.p>
                  <motion.p 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#99815b] mr-2">✉️</span>
                    info@stoneyriver.com
                  </motion.p>
                  <motion.p 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#99815b] mr-2">📍</span>
                    123 Gourmet Street
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                className="mt-8 pt-6 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-white text-lg font-bold uppercase mb-4 px-2">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white"
                    variants={socialIconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white"
                    variants={socialIconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white"
                    variants={socialIconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;